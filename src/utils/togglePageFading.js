const appWrapper = document.getElementById('app');

export function addPageFading() {
  appWrapper.classList.add('faded');
}

export function removePageFading() {
  appWrapper.classList.remove('faded');
}
