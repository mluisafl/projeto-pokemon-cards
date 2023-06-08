class Player {
    _page = 0;

    _nextPage(){
        this._page == 4 ? this._page = 0 : this._page++;

        this._setPage();
        this._changesSlide();
    }

    _prevPage(){
        this._page == 0 ? this._page = 4 : this._page--;
        
        this._setPage();
        this._changesSlide();
    }

    _setPage() {
        const pages = bannerExemplo.getElementsByClassName('page');

        this._removeAllActivesClasses(pages);

        for (let i = 0; i < pages.length; i++) {
            const page = pages[i];

            if (i== this._page) {
                page.classList.add('active')
            }
        }
    }

    _removeAllActivesClasses(elements){
        for (let el of elements) {
            el.classList.remove('active');
        }
    }

    _goToPage(index) {
        this._page = index;
        
        this._setPage();
        this._changesSlide();
    }

    _changesSlide() {
        const slides = bannerExemplo.getElementsByClassName('slide');
        
        for (let slide of slides) {
            slide.style.transform = ` translateX(-${this._page}00%)`;
         }
    }
}

const player = new Player;

function nextPage() {
    player._nextPage();
}

function prevPage() {
    player._prevPage();
}

function goToPage(){
    player._goToPage(indexedDB);
}

const pages = bannerExemplo.getElementsByClassName('page');

for (let i = 0; i < pages.length; i++) {
    const page =  pages[i];

    page.onclick = () => goToPage(i);
}