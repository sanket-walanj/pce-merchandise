const merchTabs = document.querySelectorAll('.merch-header-img');
const merchContents = document.querySelectorAll('.merch-content-card');

merchTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    merchContents.forEach((content) => {
      content.classList.remove('active');
    });
    merchTabs.forEach((tab) => {
      tab.classList.remove('active');
    });
    merchContents[index].classList.add('active');
    merchTabs[index].classList.add('active');
  });
});
