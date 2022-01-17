


// ------------ scroll collection nav --------------



window.addEventListener('scroll', calcScroll)


function calcScroll (e) {
    let top = window.pageYOffset || document.documentElement.scrollTop;

    // === collection_nav 상대 위치 구하기 === 
    const collection_nav = document.querySelector('.project-search');	    	    // 위치를 구하고자 하는 Element
    const scroll_nav = document.querySelector('.scroll__project-search');
    const clientRect = collection_nav.getBoundingClientRect();                      // Element의 속성 값 반환
    const relativeTopPosition = clientRect.top;		                                // Viewport 기준으로 상대적인 Y좌표 값(top margin 값)


    // === 절대 위치 구하기 ===
    const scrolledTopPosition = window.pageYOffset;				                   //window전체를 기준으로 스크롤된 길이
    const absoluteTopPosition = scrolledTopPosition + relativeTopPosition;	       //절대 좌표

    // 스크롤 내리면 .scroll__project-search 보임
    if ( top + 120 > absoluteTopPosition ) {

       scroll_nav.classList.add('.show')
       scroll_nav.classList.remove('.hide')

       collection_nav.classList.add('.hide')
       collection_nav.classList.remove('.show')
    } else if ( absoluteTopPosition > top + 120 ) { 

       scroll_nav.classList.add('.hide')
       scroll_nav.classList.remove('.show')

       collection_nav.classList.add('.show')
       collection_nav.classList.remove('.hide')
    }
}

