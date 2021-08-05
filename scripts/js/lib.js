// ********** Cat subtitle show and hide **********

function blogCatsToggle() {
  const catTitle = document.querySelector('.cat-ul-heading');
  const catList = document.querySelector('.blog-categories-ul');
  const indexWrapper = document.querySelector('.blog-index-wrapper');

  function categoryClickHandler() {
    catTitle.classList.toggle('cat-ul-heading-reveal');
    catList.classList.toggle('blog-categories-ul-reveal');
    indexWrapper.classList.toggle('category-push-down');
  }

  catTitle.addEventListener('click', categoryClickHandler);
}

export { blogCatsToggle };
