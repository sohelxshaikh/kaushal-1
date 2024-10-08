(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [521], {
        1233: function(A, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/about", function() {
                return t(3040)
            }])
        },
        765: function(A, e, t) {
            "use strict";
            t.d(e, {
                Z: function() {
                    return d
                }
            });
            var s = t(5893),
                i = t(7294),
                a = t(155),
                r = t(9583),
                l = t(1664),
                n = t.n(l),
                c = t(5675),
                h = t.n(c);
            let g = [{
                name: "Home",
                path: "/"
            }, {
                name: "About",
                path: "/about"
            }, {
                name: "Timeline",
                path: "/timeline"
            }, {
                name: "Ambassador",
                path: "/campus"
            }, {
                name: "Team",
                path: "/team"
            }, {
                name: "Gallery",
                path: "/gallery"
            }, {
                name: "Faqs",
                path: "/contact"
            }];

            function d() {
                let [A, e] = (0, i.useState)(0);
                return (0, i.useEffect)(() => {
                    let A = async () => {
                        let A = await new Promise(A => setTimeout(() => A(1165), 1e3));
                        e(A)
                    };
                    A()
                }, []), (0, s.jsxs)("div", {
                    children: [(0, s.jsx)("hr", {
                        className: "border-0 h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent mt-10 "
                    }), (0, s.jsxs)("div", {
                        className: "flex items-center flex-col w-full h-full bg-hack footer-list p-16 lg:p-10 lg:pt-16 lg:pb-8",
                        children: [(0, s.jsx)("ul", {
                            className: "hidden items-center gap-5 xl:gap-10 text-base-1xl flex-col lg:flex-row footer-list lg:flex mb-4 space-x-5",
                            children: g.map((A, e) => (0, s.jsx)("li", {
                                children: (0, s.jsx)(n(), {
                                    href: A.path,
                                    children: (0, s.jsx)("div", {
                                        className: "flex flex-col items-center justify-center mx-1",
                                        children: (0, s.jsx)("div", {
                                            className: "text-lg font-thin",
                                            children: A.name
                                        })
                                    })
                                })
                            }, e))
                        }), (0, s.jsx)("div", {
                            children: (0, s.jsx)(n(), {
                                href: "/",
                                children: (0, s.jsx)(h(), {
                                    src: "./Kaushallogo.jpg",
                                    width: 288,
                                    height: 64,
                                    alt: "",
                                    priority: !0
                                })
                            })
                        }), (0, s.jsx)("div", {
                            className: "text-center mb-4",
                            children: (0, s.jsxs)("p", {
                                className: "text-sm text-gray-500",
                                children: ["Visitor Count: ", (0, s.jsx)("span", {
                                    className: "font-bold text-gray-700",
                                    children: A
                                })]
                            })
                        }), (0, s.jsxs)("div", {
                            className: "flex items-center gap-6 mb-4 footer-list text-2xl",
                            children: [(0, s.jsx)(n(), {
                                href: "https://jaipur.manipal.edu/",
                                legacyBehavior: !0,
                                children: (0, s.jsx)("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, s.jsx)(a.GDB, {
                                        className: "cursor-pointer"
                                    })
                                })
                            }), (0, s.jsx)(n(), {
                                href: "https://www.instagram.com/muj.hackx/",
                                legacyBehavior: !0,
                                children: (0, s.jsx)("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, s.jsx)(r.Zf_, {
                                        className: "cursor-pointer"
                                    })
                                })
                            }), (0, s.jsx)(n(), {
                                href: "https://www.linkedin.com/company/mujhackx/",
                                legacyBehavior: !0,
                                children: (0, s.jsx)("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, s.jsx)(r.ltd, {
                                        className: "cursor-pointer"
                                    })
                                })
                            })]
                        }), (0, s.jsx)("p", {
                            className: "flex footer-list mb-4 text-center pt-8 gap-1",
                            children: "\xa92024 MUJHackX, All rights reserved."
                        })]
                    })]
                })
            }
        },
        3040: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return D
                }
            });
            var s = t(5893),
                i = t(7294),
                a = t(4960),
                r = t(8828),
                l = t(4037),
                n = t(1550);

            function c(A) {
                let {
                    targetValue: e
                } = A, t = (0, a.c)(0), c = (0, r.H)(t, Math.round), h = (0, i.useRef)();
                (0, i.useEffect)(() => {
                    let A = new IntersectionObserver(A => {
                        let [s] = A;
                        s.isIntersecting && (0, l.j)(t, e, {
                            duration: 4,
                            ease: "linear",
                            onUpdate: A => t.set(A)
                        })
                    }, {
                        root: null,
                        rootMargin: "0px",
                        threshold: 1
                    });
                    return h.current && A.observe(h.current), () => {
                        h.current && A.unobserve(h.current)
                    }
                }, []);
                let g = {
                    background: "linear-gradient(80deg, #d654ff 6.67%, #e787ff 28.13%, #9b65ff 64.87%, #a71bff 95.66%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                };
                return (0, s.jsxs)("div", {
                    ref: h,
                    className: "flex",
                    children: [(0, s.jsx)(n.E.p, {
                        className: "font-medium text-[2rem] md:text-[4rem]",
                        style: g,
                        children: c
                    }), (0, s.jsx)("p", {
                        className: "font-medium text-[2rem] md:text-[4rem]",
                        style: g,
                        children: "+"
                    })]
                })
            }
            let h = A => {
                let {
                    icon: e,
                    heading: t,
                    description: i
                } = A;
                return (0, s.jsx)("div", {
                    className: " w-[calc(50%%-2rem)] md:w-[calc(33%-2rem)] my-6 md:my-8 mx-4",
                    children: (0, s.jsxs)("div", {
                        className: "flex  flex-col items-center justify-center",
                        children: [(0, s.jsx)("div", {
                            className: "flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full",
                            children: (0, s.jsx)("img", {
                                src: e,
                                alt: "icon",
                                className: "w-10 h-10 md:w-12 md:h-12"
                            })
                        }), (0, s.jsx)("div", {
                            className: "text-xl md:text-2xl mt-4 text-slate-200 text-center",
                            children: t
                        }), (0, s.jsx)("div", {
                            className: "text-xs md:text-base mt-4 text-slate-200 text-center",
                            children: i
                        })]
                    })
                })
            };
            var g = t(5675),
                d = t.n(g),
                o = {
                    src: "/_next/static/media/img1.3bee5465.png",
                    height: 1768,
                    width: 1577,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAJ1BMVEVMaXGvRJekWGrpxyCvQZznvhKrQZlNtUnflB/25gjREiKfn1JFwEVEjOT0AAAADXRSTlMAIxFBMQo8JzAfXyhRzo1tLgAAAAlwSFlzAAAuIwAALiMBeKU/dgAAADBJREFUeJwlybcNADAMBLF7Bctp/3kNwRULkgASjjX43AogPcP6lo8Gztfu6KcKyR4PqQCJKLc25AAAAABJRU5ErkJggg==",
                    blurWidth: 7,
                    blurHeight: 8
                },
                m = {
                    src: "/_next/static/media/img2.fafd7116.jpg",
                    height: 144,
                    width: 144,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAdEAACAgEFAAAAAAAAAAAAAAAAAwERBCExMlGh/8QAFQEBAQAAAAAAAAAAAAAAAAAABQb/xAAWEQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhEDEQA/ALqGsjN0UyFVXCd769sAEVqFX//Z",
                    blurWidth: 8,
                    blurHeight: 8
                },
                x = {
                    src: "/_next/static/media/img9.154a4bd6.svg",
                    height: 796,
                    width: 2e3,
                    blurWidth: 0,
                    blurHeight: 0
                },
                w = {
                    src: "/_next/static/media/img4.ed3ed5fe.png",
                    height: 371,
                    width: 672,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAG1BMVEX+/v74+fnr6+zByNDY3+Xh5Ofd4eSRrsjS19wRLcTTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJElEQVR4nBXIuREAQAjEMHvhnv4rZlAoSIMC9W5XgPOT7IgqAwSZADt7B5k3AAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 4
                },
                u = {
                    src: "/_next/static/media/img5.2cf848a5.jpeg",
                    height: 500,
                    width: 500,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAEAAAcAAAAAAAAAAAAAAAAAARETFCExYf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCvxusSo92AD//Z",
                    blurWidth: 8,
                    blurHeight: 8
                },
                f = {
                    src: "/_next/static/media/img6.74db9b51.png",
                    height: 590,
                    width: 285,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAMAAADp7a43AAAAKlBMVEX/79/////9+vX8+vjv0rbpvo78+fb////58+roxqPPfQzMehDpx6f///+9Xs2AAAAADnRSTlMBN2dJcAt7MVlRO25SLMbUiyUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAoSURBVHicFcm3EQAgEASxvbfY/ttlUCpIgL1Awy5yS07ExKqclvSfBwovAHaLqtyCAAAAAElFTkSuQmCC",
                    blurWidth: 4,
                    blurHeight: 8
                },
                p = {
                    src: "/_next/static/media/img7.431f44dc.png",
                    height: 1800,
                    width: 1800,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEXV8Wnj+Y/k9KS8xpTW82Lg/W3J0a/d+mzY9WjP6mjS44/G3mfAwbu+0m61trDK33mgqITF1oOICL4oAAAACXBIWXMAACE4AAAhOAFFljFgAAAAOklEQVR4nBXLSRLAIAwEsQaMZ0z2/382xVklJBxITKIWTPCTZzMU37h7FMjXm1t8jOwYVa0WJSTH7j80HwF/lVDyvQAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 8
                },
                E = {
                    src: "/_next/static/media/img8.3386f9d8.jpg",
                    height: 300,
                    width: 300,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAeEAABAwQDAAAAAAAAAAAAAAAAAxITARUxMmFxkf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAMAwEAAhEDEQA/AKg5W55Ujl1dX3rgACuwGX//2Q==",
                    blurWidth: 8,
                    blurHeight: 8
                },
                j = {
                    src: "/_next/static/media/img3.79482b44.png",
                    height: 5658,
                    width: 24824,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAGFBMVEU7wOW10um21OgTueMA//81vuQAsuWu0/BPwfFPAAAACHRSTlM8O0R4AUMeIy7MHB4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAaSURBVHicY2BmZGRkYmJnYWBmYGBlYGBlAwABWgApIOYxfgAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 2
                },
                b = {
                    src: "/_next/static/media/img10.609e240d.png",
                    height: 1080,
                    width: 1920,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAFVBMVEUAMZUAMZcAMpcAM5dMaXEAMZcAMpaHfOTBAAAAB3RSTlM9I5MuAHWn0VlnZwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACZJREFUeJxjYIECBgZGZgYGRgZmBlYmNiY2JiZWBgZGRmawCEwNAAneAHAl8eqlAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 5
                },
                B = {
                    src: "/_next/static/media/img11.5730cb7b.png",
                    height: 676,
                    width: 1080,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAElBMVEX////3+/zc8PDX4/DE6Orq8PdwN2cSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAGklEQVR4nGNggANGMGBgYGBlZmZiYUJIwAEAApwAGnuOKeIAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 5
                },
                O = {
                    src: "/_next/static/media/img12.5de0fb81.png",
                    height: 280,
                    width: 280,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEUMKkYHKEYHJUVMaXE0PUMKKkYIKUcHKkUiNEQJK0cIK0i/iTYKKUMFKElFQkN5Xj5HBgDhAAAADXRSTlP56y4A/a8qsPytsP0x/yqREAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADtJREFUeJwVykESgCAMBMHZJCCoS/7/W8s+NzkHXDMJ2aDgNj7LG2xXWeDTfSyG62m8/7zKesnY0oj8ADx+AbdT6TvSAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 8
                },
                N = {
                    src: "/_next/static/media/img13.9f3bd17e.jpg",
                    height: 1080,
                    width: 1920,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAIDAAAAAAAAAAAAAAAAAQIDBBESIf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AKtGvcX2rYyWm+VLfiAALdf/2Q==",
                    blurWidth: 8,
                    blurHeight: 5
                },
                z = t(765);
            let C = [{
                    icon: "/img1.svg",
                    heading: "Collaborate and skill up",
                    description: "Connect with people, form a team, learn new skills and develop amazing projects!"
                }, {
                    icon: "/img2.svg",
                    heading: "Win exciting prizes",
                    description: "Top 3 teams plus best projects of each domain will win prizes which will be disclosed soon!"
                }, {
                    icon: "/img3.svg",
                    heading: "Engaging Workshops",
                    description: "Technical workshops and events like no-light event will keep the participants engaged throughout."
                }, {
                    icon: "/img4.svg",
                    heading: "Mentorship sessions",
                    description: "Get mentorship and guidance from prominent technocrats of the industry."
                }, {
                    icon: "/img5.svg",
                    heading: "Recruitment offers",
                    description: "Best performers will get recruitment offers from prestigious companies."
                }, {
                    icon: "/img6.svg",
                    heading: "Expand network",
                    description: "Connect with industry professionals and recruiters and other teams to learn and grow more."
                }],
                v = () => {
                    let [A, e] = (0, i.useState)(0);
                    return (0, s.jsxs)("div", {
                        className: "bg-primary bg-fixed",
                        children: [(0, s.jsxs)("div", {
                            className: "pb-[30%] md:pb-[10%] pt-[45%] xl:pt-[10%] lg:pt-[15%] md:pt-[20%] h-full bg-primary flex items-center flex-col",
                            children: [(0, s.jsxs)("div", {
                                className: "w-full md:w-auto flex flex-col items-center",
                                children: [(0, s.jsx)("div", {
                                    className: "text-4xl md:text-6xl text-center font-bold bg-gradient-to-r ease-in-out via-purple-500 bg-clip-text text-transparent from-indigo-300 to-indigo-300 animate-text",
                                    children: "WHY PARTICIPATE IN HACKX?"
                                }), (0, s.jsx)("div", {
                                    className: "flex  justify-center flex-wrap mt-12 items-center w-[90%] md:w-[85%] bg-gradient-to-r from-[#9d00ff1f] to-[#5600ff4d] rounded-2xl pt-4 md:pt-0",
                                    children: C.map((A, e) => (0, s.jsx)(h, {
                                        icon: A.icon,
                                        heading: A.heading,
                                        description: A.description
                                    }, e))
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "w-full mt-32 flex flex-col items-center",
                                children: [(0, s.jsx)("div", {
                                    className: "text-4xl md:text-6xl text-center font-bold bg-gradient-to-r ease-in-out via-purple-500 bg-clip-text text-transparent from-indigo-300 to-indigo-300 animate-text",
                                    children: "LAST YEAR'S SUCCESS"
                                }), (0, s.jsxs)(n.E.div, {
                                    className: "flex flex-row mt-6 md:mt-8 items-center w-full md:w-[80%] flex-grow",
                                    children: [(0, s.jsxs)("div", {
                                        className: "flex flex-col flex-grow items-center",
                                        children: [(0, s.jsx)(c, {
                                            targetValue: 30
                                        }), (0, s.jsx)("div", {
                                            className: "md:text-3xl text-center text-slate-200",
                                            children: "Universities"
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "flex flex-col flex-grow items-center",
                                        children: [(0, s.jsx)(c, {
                                            targetValue: 1e3
                                        }), (0, s.jsx)("div", {
                                            className: "md:text-3xl text-center text-slate-200",
                                            children: "Participants"
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "flex flex-col flex-grow items-center",
                                        children: [(0, s.jsx)(c, {
                                            targetValue: 850
                                        }), (0, s.jsx)("div", {
                                            className: "md:text-3xl text-center text-slate-200",
                                            children: "Projects"
                                        })]
                                    })]
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "w-full md:w-auto flex flex-col items-center mt-32",
                                children: [(0, s.jsx)("div", {
                                    className: "text-4xl md:text-6xl text-center font-bold bg-gradient-to-r ease-in-out via-purple-500 bg-clip-text text-transparent from-indigo-300 to-indigo-300 animate-text",
                                    children: "PAST PARTNERS & SPONSORS"
                                }), (0, s.jsxs)("div", {
                                    className: "flex flex-row flex-wrap mt-12 items-center w-[90%] md:w-[60%] rounded-2xl justify-center",
                                    children: [(0, s.jsx)(d(), {
                                        src: o,
                                        alt: "sponsor",
                                        className: "m-4",
                                        width: 0,
                                        height: 0,
                                        style: {
                                            height: "8rem",
                                            width: "auto"
                                        }
                                    }), (0, s.jsx)(d(), {
                                        src: m,
                                        alt: "sponsor",
                                        className: "m-4",
                                        width: 0,
                                        height: 0,
                                        style: {
                                            height: "8rem",
                                            width: "auto"
                                        }
                                    }), (0, s.jsx)(d(), {
                                        src: x,
                                        alt: "sponsor",
                                        className: "m-4",
                                        width: 0,
                                        height: 0,
                                        style: {
                                            height: "8rem",
                                            width: "auto"
                                        }
                                    }), (0, s.jsx)(d(), {
                                        src: w,
                                        alt: "sponsor",
                                        className: "m-4",
                                        width: 0,
                                        height: 0,
                                        style: {
                                            height: "8rem",
                                            width: "auto"
                                        }
                                    }), (0, s.jsx)(d(), {
                                        src: u,
                                        alt: "sponsor",
                                        className: "m-4",
                                        width: 0,
                                        height: 0,
                                        style: {
                                            height: "8rem",
                                            width: "auto"
                                        }
                                    }), (0, s.jsx)(d(), {
                                        src: f,
                                        alt: "sponsor",
                                        className: "m-4",
                                        width: 0,
                                        height: 0,
                                        style: {
                                            height: "8rem",
                                            width: "auto"
                                        }
                                    }), (0, s.jsx)(d(), {
                                        src: p,
                                        alt: "sponsor",
                                        className: "m-4",
                                        width: 0,
                                        height: 0,
                                        style: {
                                            height: "8rem",
                                            width: "auto"
                                        }
                                    }), (0, s.jsx)(d(), {
                                        src: E,
                                        alt: "sponsor",
                                        className: "m-4",
                                        width: 0,
                                        height: 0,
                                        style: {
                                            height: "8rem",
                                            width: "auto"
                                        }
                                    }), (0, s.jsx)(d(), {
                                        src: j,
                                        alt: "sponsor",
                                        className: "m-4",
                                        width: 0,
                                        height: 0,
                                        style: {
                                            height: "8rem",
                                            width: "auto"
                                        }
                                    }), (0, s.jsx)(d(), {
                                        src: b,
                                        alt: "sponsor",
                                        className: "m-4",
                                        width: 0,
                                        height: 0,
                                        style: {
                                            height: "8rem",
                                            width: "auto"
                                        }
                                    }), (0, s.jsx)(d(), {
                                        src: B,
                                        alt: "sponsor",
                                        className: "m-4",
                                        width: 0,
                                        height: 0,
                                        style: {
                                            height: "8rem",
                                            width: "auto"
                                        }
                                    }), (0, s.jsx)(d(), {
                                        src: O,
                                        alt: "sponsor",
                                        className: "m-4",
                                        width: 0,
                                        height: 0,
                                        style: {
                                            height: "8rem",
                                            width: "auto"
                                        }
                                    }), (0, s.jsx)(d(), {
                                        src: N,
                                        alt: "sponsor",
                                        className: "m-4",
                                        width: 0,
                                        height: 0,
                                        style: {
                                            height: "8rem",
                                            width: "auto"
                                        }
                                    })]
                                })]
                            })]
                        }), (0, s.jsx)(z.Z, {})]
                    })
                };
            var D = v
        }
    },
    function(A) {
        A.O(0, [260, 603, 774, 888, 179], function() {
            return A(A.s = 1233)
        }), _N_E = A.O()
    }
]);