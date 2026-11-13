( function () {
    document.addEventListener( 'DOMContentLoaded', function () {
        var notices = document.querySelectorAll( '.settings-error.is-dismissible' );
        notices.forEach( function ( notice ) {
            setTimeout( function () {
                notice.style.transition = 'opacity 400ms ease';
                notice.style.opacity = '0';
                setTimeout( function () {
                    notice.remove();
                }, 400 );
            }, 5000 );
        } );
    } );
} )();

        ( function() {
            var nav = document.querySelector( '.oliforge-subtabs' );
            if ( ! nav ) { return; }
            var links = Array.prototype.slice.call( nav.querySelectorAll( '[data-oliforge-cf7sg-tab]' ) );
            var panels = Array.prototype.slice.call( document.querySelectorAll( '[data-oliforge-cf7sg-panel]' ) );
            var storageKey = 'oliforge_cf7sg_settings_tab';

            function activate( slug ) {
                if ( ! slug || ! links.some( function( l ) { return l.getAttribute( 'data-oliforge-cf7sg-tab' ) === slug; } ) ) {
                    slug = links.length ? links[0].getAttribute( 'data-oliforge-cf7sg-tab' ) : null;
                }
                links.forEach( function( l ) {
                    l.classList.toggle( 'is-active', l.getAttribute( 'data-oliforge-cf7sg-tab' ) === slug );
                } );
                panels.forEach( function( p ) {
                    p.classList.toggle( 'is-active', p.getAttribute( 'data-oliforge-cf7sg-panel' ) === slug );
                } );
                try { window.localStorage.setItem( storageKey, slug ); } catch ( e ) {}
            }

            links.forEach( function( link ) {
                link.addEventListener( 'click', function( e ) {
                    e.preventDefault();
                    activate( link.getAttribute( 'data-oliforge-cf7sg-tab' ) );
                } );
            } );

            var initial = window.location.hash ? window.location.hash.replace( '#oliforge-cf7sg-panel-', '' ) : '';
            if ( ! initial ) {
                try { initial = window.localStorage.getItem( storageKey ); } catch ( e ) {}
            }
            activate( initial );
        } )();
