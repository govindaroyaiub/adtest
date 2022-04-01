var bottomTab = document.getElementById('bottomSlider');
        var toptab = document.getElementById('top_arrow');
        var interscrollerRightTab = document.getElementById('interscrollerTopTab');
        var interscrollerBottomTab = document.getElementById('interscrollerBottomTab');

        var bottomBannerState = false;
        var topBannerState = false;
        var interscrollerState = false;

        bottomTab.onclick = function () {

            if (bottomBannerState == false) {
                var masterTimeline = gsap.timeline({});
                masterTimeline
                    .add('f1')
                    .to('.bottomBannerSection', {
                        duration: 0.7,
                        y: '0%',
                        ease: 'power1.in'
                    }, 'f1')
                    .to('#arrow_bottom_right_top', {
                        duration: 0.7,
                        rotate: 180,
                        ease: 'power1.in'
                    }, 'f1')

                bottomBannerState = true;
                return bottomBannerState;
            } else {
                var masterTimeline = gsap.timeline({});
                masterTimeline
                    .add('f1')
                    .to('.bottomBannerSection', {
                        duration: 0.7,
                        y: '-80%',
                        ease: 'power1.out'
                    }, 'f1')
                    .to('#arrow_bottom_right_top', {
                        duration: 0.7,
                        rotate: 0,
                        ease: 'power1.out'
                    }, 'f1')

                bottomBannerState = false;
                return bottomBannerState;
            }

        };

        toptab.onclick = function () {

            if (topBannerState == false) {
                var masterTimeline = gsap.timeline({});
                masterTimeline
                    .add('f1')
                    .to('.topbannerSection', {
                        duration: 0.7,
                        y: '0%',
                        ease: 'power1.in'
                    }, 'f1')
                    .to('#top_arrow', {
                        duration: 0.7,
                        rotate: 0,
                        ease: 'power1.in'
                    }, 'f1')

                topBannerState = true;
                return topBannerState;
            } else {
                var masterTimeline = gsap.timeline({});
                masterTimeline
                    .add('f1')
                    .to('.topbannerSection', {
                        duration: 0.7,
                        y: '67%',
                        ease: 'power1.out'
                    }, 'f1')
                    .to('#top_arrow', {
                        duration: 0.7,
                        rotate: 180,
                        ease: 'power1.out'
                    }, 'f1')

                topBannerState = false;
                return topBannerState;
            }
        }

        // interscrollerRightTab.onclick = function () {
        //     var masterTimeline = gsap.timeline({});

        //     if (interscrollerState == false) {
        //         masterTimeline
        //             .add('f1')
        //             .to('.interscrollerBannerAd', {
        //                 duration: 0.75,
        //                 opacity: 0,
        //                 display: 'none',
        //                 ease: 'power2.in'
        //             }, 'f1')
        //             .to('#sspp-interscroller-helper-middle', {
        //                 duration: 0.65,
        //                 height: 1,
        //                 ease: 'power0.none'
        //             }, 'f1+=0.5')
        //             .to('#interscrollerArrowTopRight', {
        //                 duration: 0.5,
        //                 rotate: 180,
        //                 ease: 'power1.in'
        //             }, 'f1')
        //             .to('#interscrollerArrowBottomRight', {
        //                 duration: 0.5,
        //                 rotate: 0,
        //                 ease: 'power1.in'
        //             }, 'f1')
        //             .to(window, {
        //                 duration: .5,
        //                 delay: .5,
        //                 scrollTo: {
        //                     y: ".interscrollerTop",
        //                     offsetY: 100
        //                 },
        //                 ease: 'Power1.easeInOut'
        //             }, 'f1')

        //         interscrollerState = true;
        //         return interscrollerState;
        //     } else {
        //         masterTimeline
        //             .add('f1')
        //             .to('.interscrollerBannerAd', {
        //                 duration: 0.75,
        //                 opacity: 1,
        //                 display: 'block',
        //                 ease: 'power2.out'
        //             }, 'f1+=1')
        //             .to('#sspp-interscroller-helper-middle', {
        //                 duration: 1,
        //                 height: 600,
        //                 ease: 'power0.none'
        //             }, 'f1')
        //             .to('#interscrollerArrowTopRight', {
        //                 duration: 0.5,
        //                 rotate: 0,
        //                 ease: 'power1.out'
        //             }, 'f1')
        //             .to('#interscrollerArrowBottomRight', {
        //                 duration: 0.5,
        //                 rotate: 180,
        //                 ease: 'power1.out'
        //             }, 'f1')
        //             .to(window, {
        //                 duration: .5,
        //                 delay: .5,
        //                 scrollTo: {
        //                     y: ".interscrollerTop",
        //                     offsetY: 100
        //                 },
        //                 ease: 'Power1.easeInOut'
        //             }, 'f1')

        //         interscrollerState = false;
        //         return interscrollerState;
        //     }

        // }
        // interscrollerBottomTab.onclick = function () {
        //     var masterTimeline = gsap.timeline({});

        //     if (interscrollerState == false) {
        //         masterTimeline
        //             .add('f1')
        //             .to('.interscrollerBannerAd', {
        //                 duration: 0.75,
        //                 opacity: 0,
        //                 display: 'none',
        //                 ease: 'power2.in'
        //             }, 'f1')
        //             .to('#sspp-interscroller-helper-middle', {
        //                 duration: 0.65,
        //                 height: 1,
        //                 ease: 'power0.none'
        //             }, 'f1+=0.5')
        //             .to('#interscrollerArrowTopRight', {
        //                 duration: 0.5,
        //                 rotate: 180,
        //                 ease: 'power1.in'
        //             }, 'f1')
        //             .to('#interscrollerArrowBottomRight', {
        //                 duration: 0.5,
        //                 rotate: 0,
        //                 ease: 'power1.in'
        //             }, 'f1')
        //             .to(window, {
        //                 duration: .5,
        //                 delay: .5,
        //                 scrollTo: {
        //                     y: ".interscrollerTop",
        //                     offsetY: 100
        //                 },
        //                 ease: 'Power1.easeInOut'
        //             }, 'f1')

        //         interscrollerState = true;
        //         return interscrollerState;
        //     } else {
        //         masterTimeline
        //             .add('f1')
        //             .to('.interscrollerBannerAd', {
        //                 duration: 0.75,
        //                 opacity: 1,
        //                 display: 'block',
        //                 ease: 'power2.out'
        //             }, 'f1+=1')
        //             .to('#sspp-interscroller-helper-middle', {
        //                 duration: 1,
        //                 height: 600,
        //                 ease: 'power0.none'
        //             }, 'f1')
        //             .to('#interscrollerArrowTopRight', {
        //                 duration: 0.5,
        //                 rotate: 0,
        //                 ease: 'power1.out'
        //             }, 'f1')
        //             .to('#interscrollerArrowBottomRight', {
        //                 duration: 0.5,
        //                 rotate: 180,
        //                 ease: 'power1.out'
        //             }, 'f1')
        //             .to(window, {
        //                 duration: .5,
        //                 delay: .5,
        //                 scrollTo: {
        //                     y: ".interscrollerTop",
        //                     offsetY: 100
        //                 },
        //                 ease: 'Power1.easeInOut'
        //             }, 'f1')

        //         interscrollerState = false;
        //         return interscrollerState;
        //     }
        // }