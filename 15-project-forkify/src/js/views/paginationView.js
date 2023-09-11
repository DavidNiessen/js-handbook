import View from './View.js';
import icons from 'url:../../img/icons.svg';


class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', event => {
      const btn = event.target.closest('.btn--inline');
      if (!btn) return;

      const gotoPage = +btn.dataset.goto;

      handler(gotoPage);
    });
  }

  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
    const { buttonLast, buttonNext } = this._generateButtonMarkup(currentPage);

    // Page 1 and there are other pages
    if (currentPage === 1 && numPages > 1) {
      return buttonNext;
    }

    // Last page
    if (currentPage === numPages && numPages > 1) {
      return buttonLast;
    }

    // Other page
    if (currentPage < numPages) {
      return `
        ${buttonLast}
        ${buttonNext}
      `;
    }

    // Page 1 and no other pages
    return '';
  }

  // { buttonLast, buttonNext }
  _generateButtonMarkup(currentPage) {
    return {
      buttonLast: `
        <button class="btn--inline pagination__btn--prev" data-goto="${currentPage - 1}">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${currentPage - 1}</span>
        </button>
      `,

      buttonNext: `
        <button class="btn--inline pagination__btn--next" data-goto="${currentPage + 1}">
          <span>Page ${currentPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `
    };
  }
}

export default new PaginationView();