/**
 * Utility for fast mobile touch/click response without 300ms delay or missed taps.
 */
export function bindFastClick(element: HTMLElement | null, callback: (e: Event) => void): void {
  if (!element) return;

  let touchHandled = false;

  element.addEventListener(
    'touchend',
    (e: TouchEvent) => {
      touchHandled = true;
      e.preventDefault();
      callback(e);
    },
    { passive: false }
  );

  element.addEventListener('click', (e: MouseEvent) => {
    if (touchHandled) {
      touchHandled = false;
      return;
    }
    callback(e);
  });
}
