document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.publication-media').forEach((media) => {
    const video = media.querySelector('video');
    if (!video) return;
    const card = media.closest('.publication-card--dirtymocap, .publication-card--kinest');
    const trigger = card || media;
    let shouldPlay = false;

    const showVideo = () => {
      media.classList.add('video-is-active');
    };

    const hideVideo = () => {
      media.classList.remove('video-is-active');
    };

    const play = () => {
      shouldPlay = true;
      video.playbackRate = Number(video.dataset.playbackRate || 1);

      if (video.readyState === 0) {
        video.load();
      }

      const startPlayback = () => {
        if (!shouldPlay) return;
        try {
          video.currentTime = 0;
        } catch (error) {
          // Some browsers disallow seeking until metadata is ready.
        }
        const promise = video.play();
        if (promise && typeof promise.catch === 'function') promise.catch(hideVideo);
      };

      if (video.readyState >= 1) {
        startPlayback();
      } else {
        video.addEventListener('loadedmetadata', startPlayback, { once: true });
      }
    };

    const pause = () => {
      shouldPlay = false;
      hideVideo();
      video.pause();
      try {
        video.currentTime = 0;
      } catch (error) {
        // Ignore reset failures while the browser is still loading metadata.
      }
    };

    video.addEventListener('playing', showVideo);
    video.addEventListener('waiting', hideVideo);
    video.addEventListener('stalled', hideVideo);
    video.addEventListener('error', hideVideo);
    trigger.addEventListener('mouseenter', play);
    trigger.addEventListener('focusin', play);
    trigger.addEventListener('mouseleave', pause);
    trigger.addEventListener('focusout', pause);
  });
});
