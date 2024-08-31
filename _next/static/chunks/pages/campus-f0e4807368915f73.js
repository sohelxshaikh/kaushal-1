(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [15], {
        9053: function(e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/campus", function() {
                return a(8287)
            }])
        },
        8287: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return k
                }
            });
            var s = a(5893),
                l = a(7294),
                n = a(1550),
                i = a(9583);
            let r = e => {
                let {
                    name: t,
                    contact: a,
                    socialIcons: l
                } = e, r = {
                    twitter: i.fWC,
                    linkedin: i.ltd,
                    github: i.hJX
                };
                return (0, s.jsxs)(n.E.section, {
                    className: "flex flex-col items-center justify-center mb-7 mt-6 mx-4 h-50 w-72 p-6 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg",
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6
                    },
                    whileHover: {
                        scale: 1.05
                    },
                    children: [(0, s.jsx)("h2", {
                        className: "text-2xl font-bold mt-4 text-slate-50 text-center",
                        children: t
                    }), (0, s.jsx)("p", {
                        className: "text-lg mt-2 text-slate-100 text-center",
                        children: a
                    }), (0, s.jsx)("div", {
                        className: "flex mt-4 text-slate-200",
                        children: l.map((e, t) => {
                            let a = r[e.name];
                            return (0, s.jsx)(n.E.a, {
                                href: e.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "mr-2",
                                whileHover: {
                                    scale: 1.2
                                },
                                whileTap: {
                                    scale: .9
                                },
                                children: (0, s.jsx)(a, {
                                    className: "w-6 h-6 fill-current"
                                })
                            }, t)
                        })
                    })]
                })
            };
            var o = a(155),
                c = a(1664),
                d = a.n(c),
                m = a(5675),
                x = a.n(m);
            let h = [{
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

            function u() {
                let [e, t] = (0, l.useState)(0);
                return (0, l.useEffect)(() => {
                    let e = async () => {
                        let e = await new Promise(e => setTimeout(() => e(12345), 1e3));
                        t(e)
                    };
                    e()
                }, []), (0, s.jsxs)("div", {
                    children: [(0, s.jsx)("hr", {
                        className: "border-0 h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent mt-10 "
                    }), (0, s.jsxs)("div", {
                        className: "flex items-center flex-col w-full h-full bg-hack footer-list p-16 lg:p-10 lg:pt-16 lg:pb-8",
                        children: [(0, s.jsx)("ul", {
                            className: "hidden items-center gap-5 xl:gap-10 text-base-1xl flex-col lg:flex-row footer-list lg:flex mb-4 space-x-5",
                            children: h.map((e, t) => (0, s.jsx)("li", {
                                children: (0, s.jsx)(d(), {
                                    href: e.path,
                                    children: (0, s.jsx)("div", {
                                        className: "flex flex-col items-center justify-center mx-1",
                                        children: (0, s.jsx)("div", {
                                            className: "text-lg font-thin",
                                            children: e.name
                                        })
                                    })
                                })
                            }, t))
                        }), (0, s.jsx)("div", {
                            children: (0, s.jsx)(d(), {
                                href: "/",
                                children: (0, s.jsx)(x(), {
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
                                    children: e
                                })]
                            })
                        }), (0, s.jsxs)("div", {
                            className: "flex items-center gap-6 mb-4 footer-list text-2xl",
                            children: [(0, s.jsx)(d(), {
                                href: "https://jaipur.manipal.edu/",
                                legacyBehavior: !0,
                                children: (0, s.jsx)("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, s.jsx)(o.GDB, {
                                        className: "cursor-pointer"
                                    })
                                })
                            }), (0, s.jsx)(d(), {
                                href: "https://www.instagram.com/muj.hackx/",
                                legacyBehavior: !0,
                                children: (0, s.jsx)("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, s.jsx)(i.Zf_, {
                                        className: "cursor-pointer"
                                    })
                                })
                            }), (0, s.jsx)(d(), {
                                href: "https://www.linkedin.com/company/mujhackx/",
                                legacyBehavior: !0,
                                children: (0, s.jsx)("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, s.jsx)(i.ltd, {
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
            var g = [{
                    image: "download.jpg",
                    name: "Naad Dantale",
                    contact: "+91 77220 87410",
                    socialLinks: {
                        linkedin: "https://www.linkedin.com/in/naad/"
                    }
                }, {
                    image: "download (3).jpg",
                    name: "Roshmeet Chakraborty ",
                    contact: "+91\xa070445\xa029443",
                    socialLinks: {
                        linkedin: "https://www.linkedin.com/in/roshmeet"
                    }
                }, {
                    image: "download (1).jpg",
                    name: "Rishi Joshi",
                    contact: "+91 95699 13103",
                    socialLinks: {
                        linkedin: "https://www.linkedin.com/in/rishijoshi1410/"
                    }
                }, {
                    image: "download (2).jpg",
                    name: "Shristi Krishna",
                    contact: "+91 82404 73087",
                    socialLinks: {
                        linkedin: "https://www.linkedin.com/in/shristikrishna/"
                    }
                }, {
                    image: "download (2).jpg",
                    name: "Pulkit Gupta",
                    contact: "+91 95608 87855",
                    socialLinks: {
                        linkedin: "https://www.linkedin.com/in/pulkit-gupta-abb638249/"
                    }
                }],
                p = a(1318),
                f = a.n(p);
            let b = () => (0, s.jsxs)("section", {
                    className: "relative bg-cover bg-center h-screen",
                    style: {
                        backgroundImage: "url('/meeting.jpg')"
                    },
                    children: [(0, s.jsx)("div", {
                        className: "absolute inset-0 bg-black bg-opacity-50"
                    }), (0, s.jsx)("div", {
                        className: "relative z-10 flex items-center justify-center h-full",
                        children: (0, s.jsxs)("div", {
                            className: "text-center px-4 sm:px-6 lg:px-8",
                            children: [(0, s.jsxs)("h1", {
                                className: "text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-200 via-amber-200 to-amber-400 bg-clip-text text-transparent  ",
                                children: ["Campus Ambassador ", (0, s.jsx)("span", {
                                    className: "bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent",
                                    children: "MujHackx"
                                })]
                            }), (0, s.jsxs)("p", {
                                className: "text-white text-lg sm:text-xl lg:text-2xl mb-8",
                                children: ["Be the ", (0, s.jsx)(f(), {
                                    items: ["representative", "ambassador", "leader", "advocate"]
                                }), " of your campus!"]
                            }), (0, s.jsx)("a", {
                                className: "bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300",
                                href: "https://forms.gle/WgQjJWdB7bgGH6fw5",
                                role: "button",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "Apply Now"
                            })]
                        })
                    })]
                }),
                w = () => (0, s.jsxs)("div", {
                    className: "bg-gray-100 py-16 px-4 md:px-8 lg:px-16",
                    children: [(0, s.jsx)(n.E.div, {
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .6
                        },
                        className: "max-w-7xl mx-auto text-center"
                    }), (0, s.jsxs)("div", {
                        className: "bg-white py-16 px-4 md:px-8 lg:px-16",
                        children: [(0, s.jsxs)(n.E.div, {
                            initial: {
                                opacity: 0,
                                y: 50
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .6
                            },
                            className: "max-w-7xl mx-auto text-center",
                            children: [(0, s.jsx)("h2", {
                                className: "text-3xl md:text-4xl font-extrabold text-gray-900 text-center lg:text-left lg:ml-[14rem]",
                                children: "About"
                            }), (0, s.jsxs)("div", {
                                className: "lg:flex justify-between mt-8",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex flex-col lg:w-1/2",
                                    children: [(0, s.jsxs)("p", {
                                        className: "mt-4 text-gray-600 text-base md:text-lg lg:text-2xl",
                                        children: ["Our ", (0, s.jsx)("span", {
                                            className: "text-black font-extrabold",
                                            children: "Campus Ambassador program "
                                        }), "is an incredible opportunity for students to represent our College and help us spread the word about our mission. As a Campus Ambassador, you will gain valuable experience, enhance your leadership skills, and connect with like-minded individuals."]
                                    }), (0, s.jsx)("p", {
                                        className: "mt-4 text-gray-600 text-base md:text-lg lg:text-2xl",
                                        children: "You will be the face of our hackathon on your campus, organizing events, sharing our story, and promoting our values. This role is perfect for proactive, enthusiastic, and passionate students who want to make a difference."
                                    }), (0, s.jsx)("h3", {
                                        className: "text-3xl md:text-4xl font-extrabold text-gray-900 mt-4",
                                        children: "Why Should You Apply?"
                                    }), (0, s.jsx)("p", {
                                        className: "mt-4 text-gray-600 text-base md:text-lg lg:text-2xl",
                                        children: "Becoming a Campus Ambassador offers a unique opportunity to develop your professional skills, network with industry leaders, and gain invaluable experience that will set you apart in the job market."
                                    }), (0, s.jsx)("p", {
                                        className: "mt-4 text-gray-600 text-base md:text-lg lg:text-2xl",
                                        children: "You will also receive exclusive training and mentorship, have the chance to earn rewards and recognition, and be part of a dynamic and supportive community."
                                    })]
                                }), (0, s.jsx)("img", {
                                    src: "Poster.png",
                                    className: "mt-8 w-full max-w-md lg:w-1/2 lg:h-100 lg:mt-3 border-rounded-lg"
                                })]
                            })]
                        }), (0, s.jsxs)(n.E.div, {
                            initial: {
                                opacity: 0,
                                y: 50
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .6,
                                delay: .5
                            },
                            className: "max-w-7xl mx-auto mt-16 flex flex-col lg:flex-row items-center justify-center lg:justify-between",
                            children: [(0, s.jsxs)("div", {
                                className: "lg:w-1/2 lg:mr-8",
                                children: [(0, s.jsx)("h3", {
                                    className: "text-2xl md:text-3xl font-bold text-gray-900 text-center lg:text-left",
                                    children: "Perks"
                                }), (0, s.jsx)("p", {
                                    className: "mt-4 text-gray-600 text-base md:text-lg lg:text-xl",
                                    children: "As a Campus Ambassador, you will receive exclusive training and mentorship, allowing you to develop your skills and knowledge. You will have the opportunity to network with industry leaders, gaining valuable insights and connections. In addition, you will be recognized and rewarded for your efforts, and gain access to special events and resources."
                                })]
                            }), (0, s.jsx)(n.E.img, {
                                src: "images.jpg",
                                alt: "Perks",
                                initial: {
                                    opacity: 0,
                                    scale: .8
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                transition: {
                                    duration: .6
                                },
                                className: "mt-8 w-full max-w-md lg:mt-0 lg:w-1/2"
                            })]
                        }), (0, s.jsxs)(n.E.div, {
                            initial: {
                                opacity: 0,
                                y: 50
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .6,
                                delay: 1
                            },
                            className: "max-w-7xl mx-auto mt-16 flex flex-col lg:flex-row items-center justify-center lg:justify-between",
                            children: [(0, s.jsxs)("div", {
                                className: "lg:w-1/2 lg:mr-8",
                                children: [(0, s.jsx)("h3", {
                                    className: "text-2xl md:text-3xl font-bold text-gray-900 text-center lg:text-left",
                                    children: "Responsibilities"
                                }), (0, s.jsx)("p", {
                                    className: "mt-4 text-gray-600 text-base md:text-lg lg:text-xl",
                                    children: "As a Campus Ambassador, you will be responsible for promoting our brand on campus, organizing and hosting events and workshops, engaging with students and gathering feedback, and representing our company at campus fairs and events."
                                })]
                            }), (0, s.jsx)(n.E.img, {
                                src: "images (1).jpg",
                                alt: "Responsibilities",
                                initial: {
                                    opacity: 0,
                                    scale: .8
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                transition: {
                                    duration: .6
                                },
                                className: "mt-8 w-full max-w-md lg:mt-0 lg:w-1/2"
                            })]
                        })]
                    })]
                }),
                j = () => (0, s.jsx)("div", {
                    className: "flex flex-col items-center p-6 bg-gray-100 sm:p-12",
                    children: (0, s.jsxs)("div", {
                        className: "w-full max-w-md p-6 text-center bg-white shadow-md rounded-lg",
                        children: [(0, s.jsx)("h2", {
                            className: "mb-4 text-2xl font-bold text-blue-600",
                            children: "Become a MujHackx Campus Ambassador today!"
                        }), (0, s.jsx)("a", {
                            className: "px-4 py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
                            role: "button",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: "https://forms.gle/WgQjJWdB7bgGH6fw5",
                            children: "Apply now"
                        })]
                    })
                }),
                y = () => {
                    let [e, t] = (0, l.useState)(null), a = a => {
                        t(e === a ? null : a)
                    };
                    return (0, s.jsxs)("div", {
                        className: "p-6 bg-gray-50 sm:p-12",
                        children: [(0, s.jsx)("h2", {
                            className: "mb-6 text-3xl font-bold text-center text-blue-600",
                            children: "Frequently Asked Questions"
                        }), (0, s.jsx)("div", {
                            className: "w-full max-w-2xl mx-auto",
                            children: [{
                                question: "What is MujHackx Campus Ambassador Program?",
                                answer: "The MujHackx Campus Ambassador Program is a platform for students to become representatives of MujHackx at their universities. Ambassadors help promote coding culture and organize events."
                            }, {
                                question: "Who can apply for the Campus Ambassador Program?",
                                answer: "Any student currently enrolled in a college or university with a passion for coding and community building can apply for the Campus Ambassador Program."
                            }, {
                                question: "What are the benefits of being a Campus Ambassador?",
                                answer: "Benefits include gaining leadership experience, networking opportunities, access to exclusive MujHackx events, and the chance to improve your coding skills."
                            }, {
                                question: "How long does the Campus Ambassador Program last?",
                                answer: "The Campus Ambassador Program typically lasts for one academic year, but ambassadors may reapply or be invited to continue based on their performance."
                            }, {
                                question: "What are the responsibilities of a Campus Ambassador?",
                                answer: "Responsibilities include promoting MujHackx events, organizing coding workshops, engaging with the student community, and providing feedback to MujHackx."
                            }].map((t, l) => (0, s.jsxs)("div", {
                                className: "mb-4 bg-white rounded-lg shadow-md",
                                children: [(0, s.jsxs)("button", {
                                    onClick: () => a(l),
                                    className: "w-full px-4 py-4 text-left text-lg font-medium text-blue-700 transition-colors duration-200 ease-in-out bg-blue-100 rounded-t-lg hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                    children: [t.question, (0, s.jsx)("span", {
                                        className: "float-right transition-transform ".concat(e === l ? "rotate-180" : "rotate-0"),
                                        children: (0, s.jsx)("svg", {
                                            className: "w-5 h-5",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: (0, s.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M19 9l-7 7-7-7"
                                            })
                                        })
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "px-4 py-4 overflow-hidden transition-all duration-300 ease-in-out bg-white rounded-b-lg ".concat(e === l ? "max-h-screen" : "max-h-0"),
                                    children: (0, s.jsx)("p", {
                                        className: "text-gray-700 ".concat(e === l ? "block" : "hidden"),
                                        children: t.answer
                                    })
                                })]
                            }, l))
                        })]
                    })
                },
                v = () => (0, s.jsxs)("div", {
                    className: "flex flex-col items-center p-6 bg-gray-100 sm:p-12",
                    children: [(0, s.jsx)("h2", {
                        className: "mb-6 text-3xl font-bold text-center text-blue-600",
                        children: "Campus Ambassador in 3 simple steps"
                    }), (0, s.jsxs)("div", {
                        className: "w-full max-w-md",
                        children: [(0, s.jsx)("div", {
                            className: "mb-6 transition-transform transform hover:scale-105",
                            children: (0, s.jsxs)("div", {
                                className: "flex items-center p-4 bg-white shadow-md rounded-lg",
                                children: [(0, s.jsx)("div", {
                                    className: "flex items-center justify-center w-12 h-12 mr-4 text-2xl font-bold text-white bg-blue-600 rounded-full flex-shrink-0 flex-grow-0",
                                    children: "1"
                                }), (0, s.jsx)("div", {
                                    children: (0, s.jsx)("p", {
                                        className: "font-semibold text-black",
                                        children: "Fill in the form with all your details."
                                    })
                                })]
                            })
                        }), (0, s.jsx)("div", {
                            className: "mb-6 transition-transform transform hover:scale-105",
                            children: (0, s.jsxs)("div", {
                                className: "flex items-center p-4 bg-white shadow-md rounded-lg",
                                children: [(0, s.jsx)("div", {
                                    className: "flex items-center justify-center w-12 h-12 mr-4 text-2xl font-bold text-white bg-blue-600 rounded-full flex-shrink-0 flex-grow-0",
                                    children: "2"
                                }), (0, s.jsx)("div", {
                                    children: (0, s.jsx)("p", {
                                        className: "font-semibold text-black",
                                        children: "Once you receive mail. You are officially a MUJ HackX Campus Ambassador"
                                    })
                                })]
                            })
                        }), (0, s.jsx)("div", {
                            className: "transition-transform transform hover:scale-105",
                            children: (0, s.jsxs)("div", {
                                className: "flex items-center p-4 bg-white shadow-md rounded-lg",
                                children: [(0, s.jsx)("div", {
                                    className: "flex items-center justify-center w-12 h-12 mr-4 text-2xl font-bold text-white bg-blue-600 rounded-full flex-shrink-0 flex-grow-0",
                                    children: "3"
                                }), (0, s.jsx)("div", {
                                    children: (0, s.jsx)("p", {
                                        className: "font-semibold text-black",
                                        children: "Get your referral code and start promoting, and enjoy perks."
                                    })
                                })]
                            })
                        })]
                    })]
                }),
                N = () => (0, s.jsxs)("div", {
                    className: "bg-white",
                    children: [(0, s.jsx)("div", {
                        id: "home",
                        children: (0, s.jsx)(b, {})
                    }), (0, s.jsx)("div", {
                        id: "about"
                    }), (0, s.jsxs)("div", {
                        id: "responsibilities",
                        children: [(0, s.jsx)(w, {}), (0, s.jsx)(v, {}), (0, s.jsx)("div", {
                            className: "w-full h-auto bg-white",
                            children: (0, s.jsx)("img", {
                                src: "hackx2.png",
                                className: "w-full h-101"
                            })
                        }), (0, s.jsx)(j, {}), (0, s.jsx)(y, {})]
                    }), (0, s.jsx)("h3", {
                        className: "text-black text-6xl font-bold text-center w-full mb-6 bg-white",
                        children: "Contact Us"
                    }), (0, s.jsx)("div", {
                        id: "contact",
                        className: "flex flex-row justify-evenly flex-wrap md:flex-nowrap bg-white mb-7 py-8 rounded-lg ",
                        children: g.map((e, t) => (0, s.jsx)(r, {
                            image: e.image,
                            name: e.name,
                            contact: e.contact,
                            socialIcons: Object.entries(e.socialLinks).map(e => {
                                let [t, a] = e;
                                return {
                                    name: t,
                                    url: a
                                }
                            })
                        }, t))
                    }), (0, s.jsx)(u, {})]
                });
            var k = N
        }
    },
    function(e) {
        e.O(0, [260, 318, 774, 888, 179], function() {
            return e(e.s = 9053)
        }), _N_E = e.O()
    }
]);