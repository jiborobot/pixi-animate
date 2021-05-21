(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    var Graphic1 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic2 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic1(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic3 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic2(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic4 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic3(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic5 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic6 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic5(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic7 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic6(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic8 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic7(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic9 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic10 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic9(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic11 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic10(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic12 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic11(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic13 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic14 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic13(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic15 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic14(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic16 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic15(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic17 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic18 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic17(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic19 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic18(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic20 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic19(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic21 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic22 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic21(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic23 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic22(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic24 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic23(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic25 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic26 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic25(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic27 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic26(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic28 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic27(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic29 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic30 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic29(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic31 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic30(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic32 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic31(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic33 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic34 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic33(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic35 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic34(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic36 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic35(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic37 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic38 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic37(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic39 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic38(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic40 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic39(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic41 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic42 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic41(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic43 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic42(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic44 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic43(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic45 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance11 = new Graphic44(MovieClip.SYNCHED);
        var instance10 = new Graphic40(MovieClip.SYNCHED);
        var instance9 = new Graphic36(MovieClip.SYNCHED);
        var instance8 = new Graphic32(MovieClip.SYNCHED);
        var instance7 = new Graphic28(MovieClip.SYNCHED);
        var instance6 = new Graphic24(MovieClip.SYNCHED);
        var instance5 = new Graphic20(MovieClip.SYNCHED);
        var instance4 = new Graphic16(MovieClip.SYNCHED);
        var instance3 = new Graphic12(MovieClip.SYNCHED);
        var instance2 = new Graphic8(MovieClip.SYNCHED);
        var instance1 = new Graphic4(MovieClip.SYNCHED);
        this.addTimedChild(instance11, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance10, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance9, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance8, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance7, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance6, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance5, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance4, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance3, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance2, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance1, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            });
    });

    var Graphic46 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic47 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic46(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic48 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic47(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic49 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic48(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic50 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic51 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic50(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic52 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic51(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic53 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic52(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic54 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic55 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic54(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic56 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic55(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic57 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic56(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic58 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic59 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic58(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic60 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic59(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic61 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic60(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic62 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic63 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic62(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic64 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic63(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic65 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic64(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic66 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic67 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic66(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic68 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic67(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic69 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic68(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic70 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic71 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic70(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic72 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic71(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic73 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic72(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic74 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic75 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic74(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic76 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic75(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic77 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic76(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic78 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic79 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic78(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic80 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic79(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic81 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic80(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic82 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic83 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic82(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic84 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic83(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic85 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic84(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic86 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic87 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic86(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic88 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic87(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic89 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic88(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic90 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance11 = new Graphic89(MovieClip.SYNCHED);
        var instance10 = new Graphic85(MovieClip.SYNCHED);
        var instance9 = new Graphic81(MovieClip.SYNCHED);
        var instance8 = new Graphic77(MovieClip.SYNCHED);
        var instance7 = new Graphic73(MovieClip.SYNCHED);
        var instance6 = new Graphic69(MovieClip.SYNCHED);
        var instance5 = new Graphic65(MovieClip.SYNCHED);
        var instance4 = new Graphic61(MovieClip.SYNCHED);
        var instance3 = new Graphic57(MovieClip.SYNCHED);
        var instance2 = new Graphic53(MovieClip.SYNCHED);
        var instance1 = new Graphic49(MovieClip.SYNCHED);
        this.addTimedChild(instance11, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance10, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance9, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance8, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance7, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance6, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance5, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance4, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance3, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance2, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance1, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            });
    });

    var Graphic91 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic92 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic91(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic93 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic92(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic94 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic93(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic95 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic96 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic95(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic97 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic96(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic98 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic97(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic99 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic100 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic99(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic101 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic100(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic102 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic101(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic103 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic104 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic103(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic105 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic104(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic106 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic105(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic107 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic108 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic107(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic109 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic108(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic110 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic109(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic111 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic112 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic111(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic113 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic112(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic114 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic113(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic115 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic116 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic115(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic117 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic116(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic118 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic117(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic119 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic120 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic119(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic121 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic120(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic122 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic121(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic123 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic124 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic123(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic125 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic124(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic126 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic125(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic127 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic128 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic127(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic129 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic128(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic130 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic129(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic131 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic132 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic131(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic133 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic132(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic134 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic133(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic135 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance11 = new Graphic134(MovieClip.SYNCHED);
        var instance10 = new Graphic130(MovieClip.SYNCHED);
        var instance9 = new Graphic126(MovieClip.SYNCHED);
        var instance8 = new Graphic122(MovieClip.SYNCHED);
        var instance7 = new Graphic118(MovieClip.SYNCHED);
        var instance6 = new Graphic114(MovieClip.SYNCHED);
        var instance5 = new Graphic110(MovieClip.SYNCHED);
        var instance4 = new Graphic106(MovieClip.SYNCHED);
        var instance3 = new Graphic102(MovieClip.SYNCHED);
        var instance2 = new Graphic98(MovieClip.SYNCHED);
        var instance1 = new Graphic94(MovieClip.SYNCHED);
        this.addTimedChild(instance11, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance10, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance9, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance8, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance7, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance6, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance5, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance4, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance3, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance2, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance1, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            });
    });

    var Graphic136 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic137 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic136(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic138 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic137(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic139 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic138(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic140 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic141 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic140(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic142 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic141(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic143 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic142(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic144 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic145 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic144(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic146 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic145(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic147 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic146(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic148 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic149 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic148(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic150 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic149(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic151 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic150(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic152 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic153 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic152(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic154 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic153(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic155 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic154(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic156 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic157 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic156(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic158 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic157(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic159 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic158(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic160 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic161 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic160(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic162 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic161(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic163 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic162(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic164 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic165 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic164(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic166 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic165(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic167 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic166(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic168 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic169 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic168(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic170 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic169(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic171 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic170(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic172 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic173 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic172(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic174 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic173(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic175 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic174(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic176 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic177 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic176(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic178 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic177(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic179 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic178(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic180 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance11 = new Graphic179(MovieClip.SYNCHED);
        var instance10 = new Graphic175(MovieClip.SYNCHED);
        var instance9 = new Graphic171(MovieClip.SYNCHED);
        var instance8 = new Graphic167(MovieClip.SYNCHED);
        var instance7 = new Graphic163(MovieClip.SYNCHED);
        var instance6 = new Graphic159(MovieClip.SYNCHED);
        var instance5 = new Graphic155(MovieClip.SYNCHED);
        var instance4 = new Graphic151(MovieClip.SYNCHED);
        var instance3 = new Graphic147(MovieClip.SYNCHED);
        var instance2 = new Graphic143(MovieClip.SYNCHED);
        var instance1 = new Graphic139(MovieClip.SYNCHED);
        this.addTimedChild(instance11, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance10, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance9, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance8, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance7, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance6, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance5, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance4, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance3, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance2, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance1, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            });
    });

    var Graphic181 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic182 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic181(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic183 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic182(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic184 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic183(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic185 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic186 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic185(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic187 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic186(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic188 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic187(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic189 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic190 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic189(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic191 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic190(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic192 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic191(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic193 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic194 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic193(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic195 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic194(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic196 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic195(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic197 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic198 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic197(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic199 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic198(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic200 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic199(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic201 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic202 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic201(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic203 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic202(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic204 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic203(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic205 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic206 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic205(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic207 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic206(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic208 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic207(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic209 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic210 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic209(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic211 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic210(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic212 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic211(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic213 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic214 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic213(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic215 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic214(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic216 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic215(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic217 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic218 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic217(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic219 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic218(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic220 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic219(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic221 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic222 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic221(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic223 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic222(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic224 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic223(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic225 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance11 = new Graphic224(MovieClip.SYNCHED);
        var instance10 = new Graphic220(MovieClip.SYNCHED);
        var instance9 = new Graphic216(MovieClip.SYNCHED);
        var instance8 = new Graphic212(MovieClip.SYNCHED);
        var instance7 = new Graphic208(MovieClip.SYNCHED);
        var instance6 = new Graphic204(MovieClip.SYNCHED);
        var instance5 = new Graphic200(MovieClip.SYNCHED);
        var instance4 = new Graphic196(MovieClip.SYNCHED);
        var instance3 = new Graphic192(MovieClip.SYNCHED);
        var instance2 = new Graphic188(MovieClip.SYNCHED);
        var instance1 = new Graphic184(MovieClip.SYNCHED);
        this.addTimedChild(instance11, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance10, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance9, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance8, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance7, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance6, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance5, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance4, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance3, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance2, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance1, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            });
    });

    var Graphic226 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic227 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic226(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic228 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic227(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic229 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic228(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic230 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic231 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic230(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic232 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic231(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic233 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic232(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic234 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic235 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic234(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic236 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic235(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic237 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic236(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic238 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic239 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic238(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic240 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic239(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic241 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic240(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic242 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic243 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic242(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic244 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic243(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic245 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic244(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic246 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic247 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic246(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic248 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic247(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic249 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic248(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic250 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic251 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic250(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic252 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic251(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic253 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic252(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic254 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic255 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic254(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic256 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic255(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic257 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic256(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic258 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic259 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic258(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic260 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic259(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic261 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic260(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic262 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic263 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic262(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic264 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic263(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic265 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic264(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic266 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic267 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic266(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic268 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic267(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic269 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic268(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic270 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance11 = new Graphic269(MovieClip.SYNCHED);
        var instance10 = new Graphic265(MovieClip.SYNCHED);
        var instance9 = new Graphic261(MovieClip.SYNCHED);
        var instance8 = new Graphic257(MovieClip.SYNCHED);
        var instance7 = new Graphic253(MovieClip.SYNCHED);
        var instance6 = new Graphic249(MovieClip.SYNCHED);
        var instance5 = new Graphic245(MovieClip.SYNCHED);
        var instance4 = new Graphic241(MovieClip.SYNCHED);
        var instance3 = new Graphic237(MovieClip.SYNCHED);
        var instance2 = new Graphic233(MovieClip.SYNCHED);
        var instance1 = new Graphic229(MovieClip.SYNCHED);
        this.addTimedChild(instance11, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance10, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance9, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance8, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance7, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance6, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance5, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance4, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance3, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance2, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance1, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            });
    });

    var Graphic271 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic272 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic271(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic273 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic272(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic274 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic273(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic275 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic276 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic275(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic277 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic276(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic278 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic277(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic279 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic280 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic279(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic281 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic280(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic282 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic281(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic283 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic284 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic283(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic285 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic284(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic286 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic285(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic287 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic288 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic287(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic289 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic288(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic290 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic289(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic291 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic292 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic291(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic293 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic292(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic294 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic293(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic295 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic296 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic295(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic297 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic296(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic298 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic297(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic299 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic300 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic299(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic301 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic300(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic302 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic301(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic303 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic304 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic303(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic305 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic304(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic306 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic305(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic307 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic308 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic307(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic309 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic308(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic310 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic309(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic311 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic312 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic311(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic313 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic312(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic314 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic313(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic315 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance11 = new Graphic314(MovieClip.SYNCHED);
        var instance10 = new Graphic310(MovieClip.SYNCHED);
        var instance9 = new Graphic306(MovieClip.SYNCHED);
        var instance8 = new Graphic302(MovieClip.SYNCHED);
        var instance7 = new Graphic298(MovieClip.SYNCHED);
        var instance6 = new Graphic294(MovieClip.SYNCHED);
        var instance5 = new Graphic290(MovieClip.SYNCHED);
        var instance4 = new Graphic286(MovieClip.SYNCHED);
        var instance3 = new Graphic282(MovieClip.SYNCHED);
        var instance2 = new Graphic278(MovieClip.SYNCHED);
        var instance1 = new Graphic274(MovieClip.SYNCHED);
        this.addTimedChild(instance11, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance10, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance9, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance8, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance7, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance6, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance5, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance4, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance3, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance2, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance1, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            });
    });

    var Graphic316 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic317 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic316(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic318 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic317(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic319 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic318(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic320 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic321 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic320(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic322 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic321(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic323 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic322(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic324 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic325 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic324(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic326 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic325(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic327 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic326(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic328 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic329 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic328(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic330 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic329(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic331 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic330(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic332 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic333 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic332(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic334 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic333(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic335 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic334(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic336 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic337 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic336(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic338 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic337(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic339 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic338(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic340 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic341 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic340(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic342 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic341(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic343 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic342(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic344 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic345 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic344(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic346 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic345(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic347 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic346(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic348 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic349 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic348(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic350 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic349(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic351 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic350(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic352 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic353 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic352(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic354 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic353(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic355 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic354(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic356 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic357 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic356(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic358 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic357(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic359 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic358(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic360 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance11 = new Graphic359(MovieClip.SYNCHED);
        var instance10 = new Graphic355(MovieClip.SYNCHED);
        var instance9 = new Graphic351(MovieClip.SYNCHED);
        var instance8 = new Graphic347(MovieClip.SYNCHED);
        var instance7 = new Graphic343(MovieClip.SYNCHED);
        var instance6 = new Graphic339(MovieClip.SYNCHED);
        var instance5 = new Graphic335(MovieClip.SYNCHED);
        var instance4 = new Graphic331(MovieClip.SYNCHED);
        var instance3 = new Graphic327(MovieClip.SYNCHED);
        var instance2 = new Graphic323(MovieClip.SYNCHED);
        var instance1 = new Graphic319(MovieClip.SYNCHED);
        this.addTimedChild(instance11, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance10, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance9, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance8, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance7, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance6, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance5, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance4, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance3, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance2, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance1, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            });
    });

    var Graphic361 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic362 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic361(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic363 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic362(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic364 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic363(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic365 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic366 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic365(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic367 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic366(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic368 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic367(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic369 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic370 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic369(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic371 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic370(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic372 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic371(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic373 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic374 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic373(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic375 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic374(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic376 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic375(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic377 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic378 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic377(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic379 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic378(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic380 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic379(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic381 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic382 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic381(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic383 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic382(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic384 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic383(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic385 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic386 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic385(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic387 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic386(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic388 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic387(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic389 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic390 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic389(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic391 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic390(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic392 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic391(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic393 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic394 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic393(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic395 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic394(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic396 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic395(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic397 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic398 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic397(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic399 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic398(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic400 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic399(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic401 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic402 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic401(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic403 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic402(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic404 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic403(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic405 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance11 = new Graphic404(MovieClip.SYNCHED);
        var instance10 = new Graphic400(MovieClip.SYNCHED);
        var instance9 = new Graphic396(MovieClip.SYNCHED);
        var instance8 = new Graphic392(MovieClip.SYNCHED);
        var instance7 = new Graphic388(MovieClip.SYNCHED);
        var instance6 = new Graphic384(MovieClip.SYNCHED);
        var instance5 = new Graphic380(MovieClip.SYNCHED);
        var instance4 = new Graphic376(MovieClip.SYNCHED);
        var instance3 = new Graphic372(MovieClip.SYNCHED);
        var instance2 = new Graphic368(MovieClip.SYNCHED);
        var instance1 = new Graphic364(MovieClip.SYNCHED);
        this.addTimedChild(instance11, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance10, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance9, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance8, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance7, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance6, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance5, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance4, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance3, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance2, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance1, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            });
    });

    var Graphic406 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic407 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic406(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic408 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic407(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic409 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic408(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic410 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic411 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic410(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic412 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic411(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic413 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic412(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic414 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic415 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic414(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic416 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic415(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic417 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic416(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic418 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic419 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic418(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic420 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic419(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic421 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic420(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic422 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic423 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic422(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic424 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic423(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic425 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic424(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic426 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic427 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic426(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic428 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic427(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic429 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic428(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic430 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic431 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic430(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic432 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic431(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic433 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic432(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic434 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic435 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic434(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic436 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic435(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic437 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic436(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic438 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic439 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic438(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic440 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic439(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic441 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic440(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic442 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic443 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic442(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic444 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic443(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic445 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic444(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic446 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic447 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic446(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic448 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic447(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic449 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic448(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic450 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance11 = new Graphic449(MovieClip.SYNCHED);
        var instance10 = new Graphic445(MovieClip.SYNCHED);
        var instance9 = new Graphic441(MovieClip.SYNCHED);
        var instance8 = new Graphic437(MovieClip.SYNCHED);
        var instance7 = new Graphic433(MovieClip.SYNCHED);
        var instance6 = new Graphic429(MovieClip.SYNCHED);
        var instance5 = new Graphic425(MovieClip.SYNCHED);
        var instance4 = new Graphic421(MovieClip.SYNCHED);
        var instance3 = new Graphic417(MovieClip.SYNCHED);
        var instance2 = new Graphic413(MovieClip.SYNCHED);
        var instance1 = new Graphic409(MovieClip.SYNCHED);
        this.addTimedChild(instance11, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance10, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance9, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance8, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance7, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance6, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance5, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance4, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance3, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance2, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance1, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            });
    });

    var Graphic451 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic452 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic451(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic453 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic452(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic454 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic453(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic455 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic456 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic455(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic457 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic456(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic458 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic457(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic459 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic460 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic459(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic461 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic460(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic462 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic461(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic463 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic464 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic463(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic465 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic464(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic466 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic465(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic467 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic468 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic467(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic469 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic468(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic470 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic469(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic471 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic472 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic471(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic473 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic472(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic474 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic473(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic475 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic476 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic475(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic477 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic476(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic478 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic477(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic479 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic480 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic479(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic481 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic480(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic482 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic481(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic483 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic484 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic483(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic485 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic484(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic486 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic485(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic487 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic488 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic487(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic489 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic488(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic490 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic489(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic491 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic492 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic491(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic493 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic492(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic494 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic493(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic495 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance11 = new Graphic494(MovieClip.SYNCHED);
        var instance10 = new Graphic490(MovieClip.SYNCHED);
        var instance9 = new Graphic486(MovieClip.SYNCHED);
        var instance8 = new Graphic482(MovieClip.SYNCHED);
        var instance7 = new Graphic478(MovieClip.SYNCHED);
        var instance6 = new Graphic474(MovieClip.SYNCHED);
        var instance5 = new Graphic470(MovieClip.SYNCHED);
        var instance4 = new Graphic466(MovieClip.SYNCHED);
        var instance3 = new Graphic462(MovieClip.SYNCHED);
        var instance2 = new Graphic458(MovieClip.SYNCHED);
        var instance1 = new Graphic454(MovieClip.SYNCHED);
        this.addTimedChild(instance11, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance10, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance9, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance8, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance7, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance6, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance5, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance4, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance3, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance2, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance1, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            });
    });

    var Graphic496 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic497 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic496(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic498 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic497(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic499 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic498(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic500 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic501 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic500(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic502 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic501(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic503 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic502(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic504 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic505 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic504(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic506 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic505(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic507 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic506(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic508 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic509 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic508(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic510 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic509(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic511 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic510(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic512 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic513 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic512(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic514 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic513(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic515 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic514(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic516 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic517 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic516(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic518 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic517(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic519 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic518(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic520 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic521 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic520(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic522 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic521(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic523 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic522(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic524 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic525 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic524(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic526 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic525(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic527 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic526(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic528 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic529 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic528(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic530 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic529(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic531 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic530(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic532 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic533 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic532(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic534 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic533(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic535 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic534(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic536 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    });

    var Graphic537 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic536(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 0.667,
                sy: 0.667,
                r: 0
            },
            "1": {
                r: 0.393
            },
            "2": {
                r: 0.785
            }
        });
    });

    var Graphic538 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic537(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                sx: 1,
                sy: 1
            },
            "1": {
                sx: 0.533,
                sy: 0.533
            },
            "2": {
                sx: 0.067,
                sy: 0.067
            }
        });
    });

    var Graphic539 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Graphic538(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: 4.95,
                y: -4.95
            },
            "1": {
                x: -2.5
            },
            "2": {
                x: -10
            }
        });
    });

    var Graphic540 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance11 = new Graphic539(MovieClip.SYNCHED);
        var instance10 = new Graphic535(MovieClip.SYNCHED);
        var instance9 = new Graphic531(MovieClip.SYNCHED);
        var instance8 = new Graphic527(MovieClip.SYNCHED);
        var instance7 = new Graphic523(MovieClip.SYNCHED);
        var instance6 = new Graphic519(MovieClip.SYNCHED);
        var instance5 = new Graphic515(MovieClip.SYNCHED);
        var instance4 = new Graphic511(MovieClip.SYNCHED);
        var instance3 = new Graphic507(MovieClip.SYNCHED);
        var instance2 = new Graphic503(MovieClip.SYNCHED);
        var instance1 = new Graphic499(MovieClip.SYNCHED);
        this.addTimedChild(instance11, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance10, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance9, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance8, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance7, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance6, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance5, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance4, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance3, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance2, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            })
            .addTimedChild(instance1, 0, 3, {
                "0": {
                    y: 0
                },
                "1": {
                    y: 7.35
                },
                "2": {
                    y: 14.7
                }
            });
    });

    lib.tween_nested_multiple_instances = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 3,
            framerate: 24
        });
        var instance12 = new Graphic540(MovieClip.SYNCHED)
            .setTransform(15.95, 15.15)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        var instance11 = new Graphic495(MovieClip.SYNCHED)
            .setTransform(16.5, 17.85)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        var instance10 = new Graphic450(MovieClip.SYNCHED)
            .setTransform(15.95, 15.15)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        var instance9 = new Graphic405(MovieClip.SYNCHED)
            .setTransform(15.1, 14.65)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        var instance8 = new Graphic360(MovieClip.SYNCHED)
            .setTransform(15.65, 17.35)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        var instance7 = new Graphic315(MovieClip.SYNCHED)
            .setTransform(11.75, 18.4)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        var instance6 = new Graphic270(MovieClip.SYNCHED)
            .setTransform(15.1, 14.65)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        var instance5 = new Graphic225(MovieClip.SYNCHED)
            .setTransform(17.1, 15.15)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        var instance4 = new Graphic180(MovieClip.SYNCHED)
            .setTransform(17.65, 17.85)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        var instance3 = new Graphic135(MovieClip.SYNCHED)
            .setTransform(17.1, 15.15)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        var instance2 = new Graphic90(MovieClip.SYNCHED)
            .setTransform(16.25, 14.65)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        var instance1 = new Graphic45(MovieClip.SYNCHED)
            .setTransform(16.8, 17.35)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        this.addTimedChild(instance12)
            .addTimedChild(instance11)
            .addTimedChild(instance10)
            .addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    lib.tween_nested_multiple_instances.assets = {
        "tween_nested_multiple_instances": "images/tween_nested_multiple_instances.shapes.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.tween_nested_multiple_instances,
        background: 0xffffff,
        width: 32,
        height: 32,
        framerate: 24,
        totalFrames: 3,
        library: lib
    };
}