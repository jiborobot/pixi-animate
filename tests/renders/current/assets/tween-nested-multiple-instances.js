const data = {
	stage: null,
    background: 0xffffff,
    width: 32,
    height: 32,
    framerate: 24,
    totalFrames: 3,
	assets: {
        "tween_nested_multiple_instances": "images/tween_nested_multiple_instances.shapes.json"
    },
	lib: {},
	shapes: {},
	textures: {},
	spritesheets: [],
	getTexture: function(id) {
		if (data.textures[id]) {
			return data.textures[id];
		}
		const atlas = data.spritesheets.find(atlas => !!atlas.textures[id]);
		return atlas ? atlas.textures[id] : null;
	},
	setup: function(animate) {
	

    const MovieClip = animate.MovieClip;
    const Graphics = animate.Graphics;

    const Graphic1 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic2 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic1(MovieClip.SYNCHED);
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
    }
    }

    const Graphic3 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic2(MovieClip.SYNCHED);
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
    }
    }

    const Graphic4 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic3(MovieClip.SYNCHED);
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
    }
    }

    const Graphic5 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic6 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic5(MovieClip.SYNCHED);
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
    }
    }

    const Graphic7 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic6(MovieClip.SYNCHED);
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
    }
    }

    const Graphic8 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic7(MovieClip.SYNCHED);
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
    }
    }

    const Graphic9 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic10 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic9(MovieClip.SYNCHED);
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
    }
    }

    const Graphic11 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic10(MovieClip.SYNCHED);
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
    }
    }

    const Graphic12 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic11(MovieClip.SYNCHED);
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
    }
    }

    const Graphic13 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic14 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic13(MovieClip.SYNCHED);
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
    }
    }

    const Graphic15 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic14(MovieClip.SYNCHED);
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
    }
    }

    const Graphic16 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic15(MovieClip.SYNCHED);
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
    }
    }

    const Graphic17 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic18 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic17(MovieClip.SYNCHED);
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
    }
    }

    const Graphic19 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic18(MovieClip.SYNCHED);
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
    }
    }

    const Graphic20 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic19(MovieClip.SYNCHED);
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
    }
    }

    const Graphic21 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic22 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic21(MovieClip.SYNCHED);
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
    }
    }

    const Graphic23 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic22(MovieClip.SYNCHED);
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
    }
    }

    const Graphic24 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic23(MovieClip.SYNCHED);
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
    }
    }

    const Graphic25 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic26 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic25(MovieClip.SYNCHED);
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
    }
    }

    const Graphic27 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic26(MovieClip.SYNCHED);
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
    }
    }

    const Graphic28 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic27(MovieClip.SYNCHED);
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
    }
    }

    const Graphic29 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic30 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic29(MovieClip.SYNCHED);
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
    }
    }

    const Graphic31 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic30(MovieClip.SYNCHED);
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
    }
    }

    const Graphic32 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic31(MovieClip.SYNCHED);
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
    }
    }

    const Graphic33 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic34 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic33(MovieClip.SYNCHED);
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
    }
    }

    const Graphic35 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic34(MovieClip.SYNCHED);
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
    }
    }

    const Graphic36 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic35(MovieClip.SYNCHED);
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
    }
    }

    const Graphic37 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic38 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic37(MovieClip.SYNCHED);
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
    }
    }

    const Graphic39 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic38(MovieClip.SYNCHED);
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
    }
    }

    const Graphic40 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic39(MovieClip.SYNCHED);
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
    }
    }

    const Graphic41 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic42 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic41(MovieClip.SYNCHED);
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
    }
    }

    const Graphic43 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic42(MovieClip.SYNCHED);
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
    }
    }

    const Graphic44 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic43(MovieClip.SYNCHED);
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
    }
    }

    const Graphic45 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance11 = new Graphic44(MovieClip.SYNCHED);
        const instance10 = new Graphic40(MovieClip.SYNCHED);
        const instance9 = new Graphic36(MovieClip.SYNCHED);
        const instance8 = new Graphic32(MovieClip.SYNCHED);
        const instance7 = new Graphic28(MovieClip.SYNCHED);
        const instance6 = new Graphic24(MovieClip.SYNCHED);
        const instance5 = new Graphic20(MovieClip.SYNCHED);
        const instance4 = new Graphic16(MovieClip.SYNCHED);
        const instance3 = new Graphic12(MovieClip.SYNCHED);
        const instance2 = new Graphic8(MovieClip.SYNCHED);
        const instance1 = new Graphic4(MovieClip.SYNCHED);
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
    }
    }

    const Graphic46 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic47 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic46(MovieClip.SYNCHED);
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
    }
    }

    const Graphic48 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic47(MovieClip.SYNCHED);
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
    }
    }

    const Graphic49 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic48(MovieClip.SYNCHED);
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
    }
    }

    const Graphic50 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic51 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic50(MovieClip.SYNCHED);
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
    }
    }

    const Graphic52 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic51(MovieClip.SYNCHED);
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
    }
    }

    const Graphic53 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic52(MovieClip.SYNCHED);
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
    }
    }

    const Graphic54 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic55 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic54(MovieClip.SYNCHED);
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
    }
    }

    const Graphic56 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic55(MovieClip.SYNCHED);
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
    }
    }

    const Graphic57 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic56(MovieClip.SYNCHED);
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
    }
    }

    const Graphic58 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic59 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic58(MovieClip.SYNCHED);
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
    }
    }

    const Graphic60 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic59(MovieClip.SYNCHED);
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
    }
    }

    const Graphic61 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic60(MovieClip.SYNCHED);
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
    }
    }

    const Graphic62 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic63 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic62(MovieClip.SYNCHED);
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
    }
    }

    const Graphic64 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic63(MovieClip.SYNCHED);
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
    }
    }

    const Graphic65 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic64(MovieClip.SYNCHED);
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
    }
    }

    const Graphic66 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic67 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic66(MovieClip.SYNCHED);
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
    }
    }

    const Graphic68 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic67(MovieClip.SYNCHED);
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
    }
    }

    const Graphic69 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic68(MovieClip.SYNCHED);
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
    }
    }

    const Graphic70 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic71 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic70(MovieClip.SYNCHED);
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
    }
    }

    const Graphic72 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic71(MovieClip.SYNCHED);
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
    }
    }

    const Graphic73 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic72(MovieClip.SYNCHED);
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
    }
    }

    const Graphic74 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic75 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic74(MovieClip.SYNCHED);
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
    }
    }

    const Graphic76 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic75(MovieClip.SYNCHED);
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
    }
    }

    const Graphic77 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic76(MovieClip.SYNCHED);
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
    }
    }

    const Graphic78 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic79 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic78(MovieClip.SYNCHED);
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
    }
    }

    const Graphic80 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic79(MovieClip.SYNCHED);
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
    }
    }

    const Graphic81 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic80(MovieClip.SYNCHED);
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
    }
    }

    const Graphic82 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic83 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic82(MovieClip.SYNCHED);
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
    }
    }

    const Graphic84 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic83(MovieClip.SYNCHED);
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
    }
    }

    const Graphic85 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic84(MovieClip.SYNCHED);
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
    }
    }

    const Graphic86 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic87 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic86(MovieClip.SYNCHED);
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
    }
    }

    const Graphic88 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic87(MovieClip.SYNCHED);
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
    }
    }

    const Graphic89 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic88(MovieClip.SYNCHED);
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
    }
    }

    const Graphic90 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance11 = new Graphic89(MovieClip.SYNCHED);
        const instance10 = new Graphic85(MovieClip.SYNCHED);
        const instance9 = new Graphic81(MovieClip.SYNCHED);
        const instance8 = new Graphic77(MovieClip.SYNCHED);
        const instance7 = new Graphic73(MovieClip.SYNCHED);
        const instance6 = new Graphic69(MovieClip.SYNCHED);
        const instance5 = new Graphic65(MovieClip.SYNCHED);
        const instance4 = new Graphic61(MovieClip.SYNCHED);
        const instance3 = new Graphic57(MovieClip.SYNCHED);
        const instance2 = new Graphic53(MovieClip.SYNCHED);
        const instance1 = new Graphic49(MovieClip.SYNCHED);
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
    }
    }

    const Graphic91 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic92 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic91(MovieClip.SYNCHED);
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
    }
    }

    const Graphic93 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic92(MovieClip.SYNCHED);
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
    }
    }

    const Graphic94 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic93(MovieClip.SYNCHED);
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
    }
    }

    const Graphic95 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic96 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic95(MovieClip.SYNCHED);
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
    }
    }

    const Graphic97 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic96(MovieClip.SYNCHED);
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
    }
    }

    const Graphic98 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic97(MovieClip.SYNCHED);
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
    }
    }

    const Graphic99 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic100 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic99(MovieClip.SYNCHED);
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
    }
    }

    const Graphic101 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic100(MovieClip.SYNCHED);
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
    }
    }

    const Graphic102 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic101(MovieClip.SYNCHED);
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
    }
    }

    const Graphic103 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic104 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic103(MovieClip.SYNCHED);
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
    }
    }

    const Graphic105 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic104(MovieClip.SYNCHED);
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
    }
    }

    const Graphic106 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic105(MovieClip.SYNCHED);
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
    }
    }

    const Graphic107 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic108 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic107(MovieClip.SYNCHED);
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
    }
    }

    const Graphic109 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic108(MovieClip.SYNCHED);
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
    }
    }

    const Graphic110 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic109(MovieClip.SYNCHED);
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
    }
    }

    const Graphic111 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic112 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic111(MovieClip.SYNCHED);
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
    }
    }

    const Graphic113 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic112(MovieClip.SYNCHED);
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
    }
    }

    const Graphic114 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic113(MovieClip.SYNCHED);
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
    }
    }

    const Graphic115 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic116 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic115(MovieClip.SYNCHED);
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
    }
    }

    const Graphic117 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic116(MovieClip.SYNCHED);
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
    }
    }

    const Graphic118 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic117(MovieClip.SYNCHED);
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
    }
    }

    const Graphic119 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic120 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic119(MovieClip.SYNCHED);
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
    }
    }

    const Graphic121 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic120(MovieClip.SYNCHED);
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
    }
    }

    const Graphic122 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic121(MovieClip.SYNCHED);
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
    }
    }

    const Graphic123 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic124 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic123(MovieClip.SYNCHED);
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
    }
    }

    const Graphic125 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic124(MovieClip.SYNCHED);
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
    }
    }

    const Graphic126 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic125(MovieClip.SYNCHED);
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
    }
    }

    const Graphic127 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic128 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic127(MovieClip.SYNCHED);
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
    }
    }

    const Graphic129 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic128(MovieClip.SYNCHED);
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
    }
    }

    const Graphic130 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic129(MovieClip.SYNCHED);
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
    }
    }

    const Graphic131 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic132 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic131(MovieClip.SYNCHED);
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
    }
    }

    const Graphic133 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic132(MovieClip.SYNCHED);
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
    }
    }

    const Graphic134 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic133(MovieClip.SYNCHED);
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
    }
    }

    const Graphic135 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance11 = new Graphic134(MovieClip.SYNCHED);
        const instance10 = new Graphic130(MovieClip.SYNCHED);
        const instance9 = new Graphic126(MovieClip.SYNCHED);
        const instance8 = new Graphic122(MovieClip.SYNCHED);
        const instance7 = new Graphic118(MovieClip.SYNCHED);
        const instance6 = new Graphic114(MovieClip.SYNCHED);
        const instance5 = new Graphic110(MovieClip.SYNCHED);
        const instance4 = new Graphic106(MovieClip.SYNCHED);
        const instance3 = new Graphic102(MovieClip.SYNCHED);
        const instance2 = new Graphic98(MovieClip.SYNCHED);
        const instance1 = new Graphic94(MovieClip.SYNCHED);
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
    }
    }

    const Graphic136 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic137 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic136(MovieClip.SYNCHED);
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
    }
    }

    const Graphic138 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic137(MovieClip.SYNCHED);
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
    }
    }

    const Graphic139 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic138(MovieClip.SYNCHED);
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
    }
    }

    const Graphic140 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic141 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic140(MovieClip.SYNCHED);
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
    }
    }

    const Graphic142 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic141(MovieClip.SYNCHED);
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
    }
    }

    const Graphic143 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic142(MovieClip.SYNCHED);
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
    }
    }

    const Graphic144 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic145 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic144(MovieClip.SYNCHED);
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
    }
    }

    const Graphic146 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic145(MovieClip.SYNCHED);
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
    }
    }

    const Graphic147 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic146(MovieClip.SYNCHED);
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
    }
    }

    const Graphic148 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic149 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic148(MovieClip.SYNCHED);
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
    }
    }

    const Graphic150 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic149(MovieClip.SYNCHED);
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
    }
    }

    const Graphic151 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic150(MovieClip.SYNCHED);
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
    }
    }

    const Graphic152 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic153 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic152(MovieClip.SYNCHED);
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
    }
    }

    const Graphic154 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic153(MovieClip.SYNCHED);
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
    }
    }

    const Graphic155 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic154(MovieClip.SYNCHED);
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
    }
    }

    const Graphic156 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic157 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic156(MovieClip.SYNCHED);
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
    }
    }

    const Graphic158 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic157(MovieClip.SYNCHED);
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
    }
    }

    const Graphic159 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic158(MovieClip.SYNCHED);
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
    }
    }

    const Graphic160 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic161 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic160(MovieClip.SYNCHED);
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
    }
    }

    const Graphic162 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic161(MovieClip.SYNCHED);
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
    }
    }

    const Graphic163 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic162(MovieClip.SYNCHED);
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
    }
    }

    const Graphic164 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic165 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic164(MovieClip.SYNCHED);
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
    }
    }

    const Graphic166 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic165(MovieClip.SYNCHED);
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
    }
    }

    const Graphic167 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic166(MovieClip.SYNCHED);
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
    }
    }

    const Graphic168 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic169 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic168(MovieClip.SYNCHED);
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
    }
    }

    const Graphic170 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic169(MovieClip.SYNCHED);
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
    }
    }

    const Graphic171 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic170(MovieClip.SYNCHED);
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
    }
    }

    const Graphic172 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic173 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic172(MovieClip.SYNCHED);
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
    }
    }

    const Graphic174 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic173(MovieClip.SYNCHED);
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
    }
    }

    const Graphic175 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic174(MovieClip.SYNCHED);
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
    }
    }

    const Graphic176 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic177 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic176(MovieClip.SYNCHED);
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
    }
    }

    const Graphic178 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic177(MovieClip.SYNCHED);
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
    }
    }

    const Graphic179 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic178(MovieClip.SYNCHED);
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
    }
    }

    const Graphic180 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance11 = new Graphic179(MovieClip.SYNCHED);
        const instance10 = new Graphic175(MovieClip.SYNCHED);
        const instance9 = new Graphic171(MovieClip.SYNCHED);
        const instance8 = new Graphic167(MovieClip.SYNCHED);
        const instance7 = new Graphic163(MovieClip.SYNCHED);
        const instance6 = new Graphic159(MovieClip.SYNCHED);
        const instance5 = new Graphic155(MovieClip.SYNCHED);
        const instance4 = new Graphic151(MovieClip.SYNCHED);
        const instance3 = new Graphic147(MovieClip.SYNCHED);
        const instance2 = new Graphic143(MovieClip.SYNCHED);
        const instance1 = new Graphic139(MovieClip.SYNCHED);
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
    }
    }

    const Graphic181 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic182 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic181(MovieClip.SYNCHED);
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
    }
    }

    const Graphic183 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic182(MovieClip.SYNCHED);
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
    }
    }

    const Graphic184 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic183(MovieClip.SYNCHED);
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
    }
    }

    const Graphic185 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic186 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic185(MovieClip.SYNCHED);
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
    }
    }

    const Graphic187 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic186(MovieClip.SYNCHED);
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
    }
    }

    const Graphic188 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic187(MovieClip.SYNCHED);
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
    }
    }

    const Graphic189 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic190 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic189(MovieClip.SYNCHED);
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
    }
    }

    const Graphic191 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic190(MovieClip.SYNCHED);
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
    }
    }

    const Graphic192 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic191(MovieClip.SYNCHED);
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
    }
    }

    const Graphic193 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic194 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic193(MovieClip.SYNCHED);
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
    }
    }

    const Graphic195 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic194(MovieClip.SYNCHED);
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
    }
    }

    const Graphic196 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic195(MovieClip.SYNCHED);
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
    }
    }

    const Graphic197 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic198 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic197(MovieClip.SYNCHED);
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
    }
    }

    const Graphic199 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic198(MovieClip.SYNCHED);
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
    }
    }

    const Graphic200 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic199(MovieClip.SYNCHED);
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
    }
    }

    const Graphic201 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic202 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic201(MovieClip.SYNCHED);
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
    }
    }

    const Graphic203 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic202(MovieClip.SYNCHED);
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
    }
    }

    const Graphic204 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic203(MovieClip.SYNCHED);
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
    }
    }

    const Graphic205 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic206 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic205(MovieClip.SYNCHED);
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
    }
    }

    const Graphic207 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic206(MovieClip.SYNCHED);
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
    }
    }

    const Graphic208 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic207(MovieClip.SYNCHED);
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
    }
    }

    const Graphic209 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic210 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic209(MovieClip.SYNCHED);
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
    }
    }

    const Graphic211 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic210(MovieClip.SYNCHED);
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
    }
    }

    const Graphic212 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic211(MovieClip.SYNCHED);
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
    }
    }

    const Graphic213 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic214 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic213(MovieClip.SYNCHED);
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
    }
    }

    const Graphic215 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic214(MovieClip.SYNCHED);
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
    }
    }

    const Graphic216 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic215(MovieClip.SYNCHED);
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
    }
    }

    const Graphic217 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic218 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic217(MovieClip.SYNCHED);
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
    }
    }

    const Graphic219 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic218(MovieClip.SYNCHED);
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
    }
    }

    const Graphic220 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic219(MovieClip.SYNCHED);
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
    }
    }

    const Graphic221 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic222 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic221(MovieClip.SYNCHED);
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
    }
    }

    const Graphic223 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic222(MovieClip.SYNCHED);
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
    }
    }

    const Graphic224 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic223(MovieClip.SYNCHED);
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
    }
    }

    const Graphic225 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance11 = new Graphic224(MovieClip.SYNCHED);
        const instance10 = new Graphic220(MovieClip.SYNCHED);
        const instance9 = new Graphic216(MovieClip.SYNCHED);
        const instance8 = new Graphic212(MovieClip.SYNCHED);
        const instance7 = new Graphic208(MovieClip.SYNCHED);
        const instance6 = new Graphic204(MovieClip.SYNCHED);
        const instance5 = new Graphic200(MovieClip.SYNCHED);
        const instance4 = new Graphic196(MovieClip.SYNCHED);
        const instance3 = new Graphic192(MovieClip.SYNCHED);
        const instance2 = new Graphic188(MovieClip.SYNCHED);
        const instance1 = new Graphic184(MovieClip.SYNCHED);
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
    }
    }

    const Graphic226 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic227 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic226(MovieClip.SYNCHED);
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
    }
    }

    const Graphic228 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic227(MovieClip.SYNCHED);
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
    }
    }

    const Graphic229 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic228(MovieClip.SYNCHED);
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
    }
    }

    const Graphic230 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic231 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic230(MovieClip.SYNCHED);
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
    }
    }

    const Graphic232 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic231(MovieClip.SYNCHED);
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
    }
    }

    const Graphic233 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic232(MovieClip.SYNCHED);
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
    }
    }

    const Graphic234 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic235 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic234(MovieClip.SYNCHED);
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
    }
    }

    const Graphic236 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic235(MovieClip.SYNCHED);
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
    }
    }

    const Graphic237 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic236(MovieClip.SYNCHED);
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
    }
    }

    const Graphic238 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic239 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic238(MovieClip.SYNCHED);
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
    }
    }

    const Graphic240 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic239(MovieClip.SYNCHED);
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
    }
    }

    const Graphic241 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic240(MovieClip.SYNCHED);
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
    }
    }

    const Graphic242 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic243 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic242(MovieClip.SYNCHED);
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
    }
    }

    const Graphic244 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic243(MovieClip.SYNCHED);
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
    }
    }

    const Graphic245 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic244(MovieClip.SYNCHED);
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
    }
    }

    const Graphic246 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic247 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic246(MovieClip.SYNCHED);
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
    }
    }

    const Graphic248 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic247(MovieClip.SYNCHED);
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
    }
    }

    const Graphic249 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic248(MovieClip.SYNCHED);
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
    }
    }

    const Graphic250 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic251 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic250(MovieClip.SYNCHED);
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
    }
    }

    const Graphic252 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic251(MovieClip.SYNCHED);
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
    }
    }

    const Graphic253 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic252(MovieClip.SYNCHED);
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
    }
    }

    const Graphic254 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic255 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic254(MovieClip.SYNCHED);
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
    }
    }

    const Graphic256 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic255(MovieClip.SYNCHED);
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
    }
    }

    const Graphic257 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic256(MovieClip.SYNCHED);
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
    }
    }

    const Graphic258 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic259 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic258(MovieClip.SYNCHED);
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
    }
    }

    const Graphic260 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic259(MovieClip.SYNCHED);
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
    }
    }

    const Graphic261 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic260(MovieClip.SYNCHED);
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
    }
    }

    const Graphic262 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic263 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic262(MovieClip.SYNCHED);
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
    }
    }

    const Graphic264 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic263(MovieClip.SYNCHED);
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
    }
    }

    const Graphic265 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic264(MovieClip.SYNCHED);
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
    }
    }

    const Graphic266 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic267 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic266(MovieClip.SYNCHED);
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
    }
    }

    const Graphic268 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic267(MovieClip.SYNCHED);
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
    }
    }

    const Graphic269 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic268(MovieClip.SYNCHED);
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
    }
    }

    const Graphic270 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance11 = new Graphic269(MovieClip.SYNCHED);
        const instance10 = new Graphic265(MovieClip.SYNCHED);
        const instance9 = new Graphic261(MovieClip.SYNCHED);
        const instance8 = new Graphic257(MovieClip.SYNCHED);
        const instance7 = new Graphic253(MovieClip.SYNCHED);
        const instance6 = new Graphic249(MovieClip.SYNCHED);
        const instance5 = new Graphic245(MovieClip.SYNCHED);
        const instance4 = new Graphic241(MovieClip.SYNCHED);
        const instance3 = new Graphic237(MovieClip.SYNCHED);
        const instance2 = new Graphic233(MovieClip.SYNCHED);
        const instance1 = new Graphic229(MovieClip.SYNCHED);
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
    }
    }

    const Graphic271 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic272 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic271(MovieClip.SYNCHED);
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
    }
    }

    const Graphic273 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic272(MovieClip.SYNCHED);
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
    }
    }

    const Graphic274 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic273(MovieClip.SYNCHED);
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
    }
    }

    const Graphic275 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic276 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic275(MovieClip.SYNCHED);
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
    }
    }

    const Graphic277 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic276(MovieClip.SYNCHED);
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
    }
    }

    const Graphic278 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic277(MovieClip.SYNCHED);
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
    }
    }

    const Graphic279 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic280 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic279(MovieClip.SYNCHED);
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
    }
    }

    const Graphic281 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic280(MovieClip.SYNCHED);
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
    }
    }

    const Graphic282 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic281(MovieClip.SYNCHED);
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
    }
    }

    const Graphic283 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic284 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic283(MovieClip.SYNCHED);
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
    }
    }

    const Graphic285 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic284(MovieClip.SYNCHED);
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
    }
    }

    const Graphic286 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic285(MovieClip.SYNCHED);
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
    }
    }

    const Graphic287 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic288 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic287(MovieClip.SYNCHED);
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
    }
    }

    const Graphic289 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic288(MovieClip.SYNCHED);
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
    }
    }

    const Graphic290 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic289(MovieClip.SYNCHED);
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
    }
    }

    const Graphic291 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic292 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic291(MovieClip.SYNCHED);
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
    }
    }

    const Graphic293 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic292(MovieClip.SYNCHED);
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
    }
    }

    const Graphic294 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic293(MovieClip.SYNCHED);
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
    }
    }

    const Graphic295 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic296 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic295(MovieClip.SYNCHED);
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
    }
    }

    const Graphic297 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic296(MovieClip.SYNCHED);
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
    }
    }

    const Graphic298 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic297(MovieClip.SYNCHED);
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
    }
    }

    const Graphic299 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic300 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic299(MovieClip.SYNCHED);
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
    }
    }

    const Graphic301 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic300(MovieClip.SYNCHED);
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
    }
    }

    const Graphic302 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic301(MovieClip.SYNCHED);
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
    }
    }

    const Graphic303 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic304 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic303(MovieClip.SYNCHED);
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
    }
    }

    const Graphic305 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic304(MovieClip.SYNCHED);
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
    }
    }

    const Graphic306 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic305(MovieClip.SYNCHED);
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
    }
    }

    const Graphic307 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic308 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic307(MovieClip.SYNCHED);
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
    }
    }

    const Graphic309 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic308(MovieClip.SYNCHED);
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
    }
    }

    const Graphic310 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic309(MovieClip.SYNCHED);
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
    }
    }

    const Graphic311 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic312 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic311(MovieClip.SYNCHED);
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
    }
    }

    const Graphic313 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic312(MovieClip.SYNCHED);
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
    }
    }

    const Graphic314 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic313(MovieClip.SYNCHED);
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
    }
    }

    const Graphic315 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance11 = new Graphic314(MovieClip.SYNCHED);
        const instance10 = new Graphic310(MovieClip.SYNCHED);
        const instance9 = new Graphic306(MovieClip.SYNCHED);
        const instance8 = new Graphic302(MovieClip.SYNCHED);
        const instance7 = new Graphic298(MovieClip.SYNCHED);
        const instance6 = new Graphic294(MovieClip.SYNCHED);
        const instance5 = new Graphic290(MovieClip.SYNCHED);
        const instance4 = new Graphic286(MovieClip.SYNCHED);
        const instance3 = new Graphic282(MovieClip.SYNCHED);
        const instance2 = new Graphic278(MovieClip.SYNCHED);
        const instance1 = new Graphic274(MovieClip.SYNCHED);
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
    }
    }

    const Graphic316 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic317 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic316(MovieClip.SYNCHED);
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
    }
    }

    const Graphic318 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic317(MovieClip.SYNCHED);
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
    }
    }

    const Graphic319 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic318(MovieClip.SYNCHED);
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
    }
    }

    const Graphic320 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic321 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic320(MovieClip.SYNCHED);
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
    }
    }

    const Graphic322 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic321(MovieClip.SYNCHED);
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
    }
    }

    const Graphic323 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic322(MovieClip.SYNCHED);
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
    }
    }

    const Graphic324 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic325 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic324(MovieClip.SYNCHED);
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
    }
    }

    const Graphic326 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic325(MovieClip.SYNCHED);
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
    }
    }

    const Graphic327 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic326(MovieClip.SYNCHED);
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
    }
    }

    const Graphic328 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic329 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic328(MovieClip.SYNCHED);
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
    }
    }

    const Graphic330 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic329(MovieClip.SYNCHED);
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
    }
    }

    const Graphic331 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic330(MovieClip.SYNCHED);
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
    }
    }

    const Graphic332 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic333 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic332(MovieClip.SYNCHED);
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
    }
    }

    const Graphic334 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic333(MovieClip.SYNCHED);
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
    }
    }

    const Graphic335 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic334(MovieClip.SYNCHED);
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
    }
    }

    const Graphic336 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic337 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic336(MovieClip.SYNCHED);
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
    }
    }

    const Graphic338 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic337(MovieClip.SYNCHED);
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
    }
    }

    const Graphic339 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic338(MovieClip.SYNCHED);
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
    }
    }

    const Graphic340 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic341 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic340(MovieClip.SYNCHED);
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
    }
    }

    const Graphic342 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic341(MovieClip.SYNCHED);
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
    }
    }

    const Graphic343 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic342(MovieClip.SYNCHED);
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
    }
    }

    const Graphic344 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic345 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic344(MovieClip.SYNCHED);
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
    }
    }

    const Graphic346 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic345(MovieClip.SYNCHED);
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
    }
    }

    const Graphic347 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic346(MovieClip.SYNCHED);
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
    }
    }

    const Graphic348 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic349 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic348(MovieClip.SYNCHED);
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
    }
    }

    const Graphic350 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic349(MovieClip.SYNCHED);
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
    }
    }

    const Graphic351 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic350(MovieClip.SYNCHED);
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
    }
    }

    const Graphic352 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic353 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic352(MovieClip.SYNCHED);
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
    }
    }

    const Graphic354 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic353(MovieClip.SYNCHED);
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
    }
    }

    const Graphic355 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic354(MovieClip.SYNCHED);
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
    }
    }

    const Graphic356 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic357 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic356(MovieClip.SYNCHED);
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
    }
    }

    const Graphic358 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic357(MovieClip.SYNCHED);
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
    }
    }

    const Graphic359 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic358(MovieClip.SYNCHED);
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
    }
    }

    const Graphic360 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance11 = new Graphic359(MovieClip.SYNCHED);
        const instance10 = new Graphic355(MovieClip.SYNCHED);
        const instance9 = new Graphic351(MovieClip.SYNCHED);
        const instance8 = new Graphic347(MovieClip.SYNCHED);
        const instance7 = new Graphic343(MovieClip.SYNCHED);
        const instance6 = new Graphic339(MovieClip.SYNCHED);
        const instance5 = new Graphic335(MovieClip.SYNCHED);
        const instance4 = new Graphic331(MovieClip.SYNCHED);
        const instance3 = new Graphic327(MovieClip.SYNCHED);
        const instance2 = new Graphic323(MovieClip.SYNCHED);
        const instance1 = new Graphic319(MovieClip.SYNCHED);
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
    }
    }

    const Graphic361 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic362 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic361(MovieClip.SYNCHED);
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
    }
    }

    const Graphic363 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic362(MovieClip.SYNCHED);
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
    }
    }

    const Graphic364 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic363(MovieClip.SYNCHED);
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
    }
    }

    const Graphic365 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic366 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic365(MovieClip.SYNCHED);
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
    }
    }

    const Graphic367 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic366(MovieClip.SYNCHED);
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
    }
    }

    const Graphic368 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic367(MovieClip.SYNCHED);
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
    }
    }

    const Graphic369 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic370 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic369(MovieClip.SYNCHED);
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
    }
    }

    const Graphic371 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic370(MovieClip.SYNCHED);
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
    }
    }

    const Graphic372 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic371(MovieClip.SYNCHED);
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
    }
    }

    const Graphic373 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic374 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic373(MovieClip.SYNCHED);
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
    }
    }

    const Graphic375 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic374(MovieClip.SYNCHED);
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
    }
    }

    const Graphic376 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic375(MovieClip.SYNCHED);
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
    }
    }

    const Graphic377 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic378 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic377(MovieClip.SYNCHED);
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
    }
    }

    const Graphic379 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic378(MovieClip.SYNCHED);
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
    }
    }

    const Graphic380 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic379(MovieClip.SYNCHED);
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
    }
    }

    const Graphic381 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic382 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic381(MovieClip.SYNCHED);
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
    }
    }

    const Graphic383 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic382(MovieClip.SYNCHED);
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
    }
    }

    const Graphic384 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic383(MovieClip.SYNCHED);
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
    }
    }

    const Graphic385 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic386 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic385(MovieClip.SYNCHED);
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
    }
    }

    const Graphic387 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic386(MovieClip.SYNCHED);
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
    }
    }

    const Graphic388 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic387(MovieClip.SYNCHED);
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
    }
    }

    const Graphic389 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic390 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic389(MovieClip.SYNCHED);
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
    }
    }

    const Graphic391 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic390(MovieClip.SYNCHED);
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
    }
    }

    const Graphic392 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic391(MovieClip.SYNCHED);
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
    }
    }

    const Graphic393 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic394 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic393(MovieClip.SYNCHED);
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
    }
    }

    const Graphic395 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic394(MovieClip.SYNCHED);
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
    }
    }

    const Graphic396 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic395(MovieClip.SYNCHED);
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
    }
    }

    const Graphic397 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic398 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic397(MovieClip.SYNCHED);
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
    }
    }

    const Graphic399 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic398(MovieClip.SYNCHED);
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
    }
    }

    const Graphic400 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic399(MovieClip.SYNCHED);
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
    }
    }

    const Graphic401 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic402 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic401(MovieClip.SYNCHED);
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
    }
    }

    const Graphic403 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic402(MovieClip.SYNCHED);
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
    }
    }

    const Graphic404 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic403(MovieClip.SYNCHED);
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
    }
    }

    const Graphic405 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance11 = new Graphic404(MovieClip.SYNCHED);
        const instance10 = new Graphic400(MovieClip.SYNCHED);
        const instance9 = new Graphic396(MovieClip.SYNCHED);
        const instance8 = new Graphic392(MovieClip.SYNCHED);
        const instance7 = new Graphic388(MovieClip.SYNCHED);
        const instance6 = new Graphic384(MovieClip.SYNCHED);
        const instance5 = new Graphic380(MovieClip.SYNCHED);
        const instance4 = new Graphic376(MovieClip.SYNCHED);
        const instance3 = new Graphic372(MovieClip.SYNCHED);
        const instance2 = new Graphic368(MovieClip.SYNCHED);
        const instance1 = new Graphic364(MovieClip.SYNCHED);
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
    }
    }

    const Graphic406 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic407 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic406(MovieClip.SYNCHED);
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
    }
    }

    const Graphic408 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic407(MovieClip.SYNCHED);
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
    }
    }

    const Graphic409 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic408(MovieClip.SYNCHED);
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
    }
    }

    const Graphic410 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic411 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic410(MovieClip.SYNCHED);
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
    }
    }

    const Graphic412 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic411(MovieClip.SYNCHED);
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
    }
    }

    const Graphic413 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic412(MovieClip.SYNCHED);
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
    }
    }

    const Graphic414 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic415 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic414(MovieClip.SYNCHED);
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
    }
    }

    const Graphic416 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic415(MovieClip.SYNCHED);
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
    }
    }

    const Graphic417 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic416(MovieClip.SYNCHED);
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
    }
    }

    const Graphic418 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic419 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic418(MovieClip.SYNCHED);
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
    }
    }

    const Graphic420 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic419(MovieClip.SYNCHED);
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
    }
    }

    const Graphic421 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic420(MovieClip.SYNCHED);
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
    }
    }

    const Graphic422 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic423 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic422(MovieClip.SYNCHED);
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
    }
    }

    const Graphic424 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic423(MovieClip.SYNCHED);
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
    }
    }

    const Graphic425 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic424(MovieClip.SYNCHED);
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
    }
    }

    const Graphic426 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic427 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic426(MovieClip.SYNCHED);
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
    }
    }

    const Graphic428 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic427(MovieClip.SYNCHED);
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
    }
    }

    const Graphic429 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic428(MovieClip.SYNCHED);
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
    }
    }

    const Graphic430 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic431 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic430(MovieClip.SYNCHED);
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
    }
    }

    const Graphic432 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic431(MovieClip.SYNCHED);
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
    }
    }

    const Graphic433 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic432(MovieClip.SYNCHED);
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
    }
    }

    const Graphic434 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic435 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic434(MovieClip.SYNCHED);
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
    }
    }

    const Graphic436 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic435(MovieClip.SYNCHED);
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
    }
    }

    const Graphic437 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic436(MovieClip.SYNCHED);
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
    }
    }

    const Graphic438 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic439 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic438(MovieClip.SYNCHED);
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
    }
    }

    const Graphic440 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic439(MovieClip.SYNCHED);
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
    }
    }

    const Graphic441 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic440(MovieClip.SYNCHED);
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
    }
    }

    const Graphic442 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic443 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic442(MovieClip.SYNCHED);
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
    }
    }

    const Graphic444 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic443(MovieClip.SYNCHED);
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
    }
    }

    const Graphic445 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic444(MovieClip.SYNCHED);
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
    }
    }

    const Graphic446 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic447 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic446(MovieClip.SYNCHED);
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
    }
    }

    const Graphic448 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic447(MovieClip.SYNCHED);
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
    }
    }

    const Graphic449 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic448(MovieClip.SYNCHED);
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
    }
    }

    const Graphic450 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance11 = new Graphic449(MovieClip.SYNCHED);
        const instance10 = new Graphic445(MovieClip.SYNCHED);
        const instance9 = new Graphic441(MovieClip.SYNCHED);
        const instance8 = new Graphic437(MovieClip.SYNCHED);
        const instance7 = new Graphic433(MovieClip.SYNCHED);
        const instance6 = new Graphic429(MovieClip.SYNCHED);
        const instance5 = new Graphic425(MovieClip.SYNCHED);
        const instance4 = new Graphic421(MovieClip.SYNCHED);
        const instance3 = new Graphic417(MovieClip.SYNCHED);
        const instance2 = new Graphic413(MovieClip.SYNCHED);
        const instance1 = new Graphic409(MovieClip.SYNCHED);
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
    }
    }

    const Graphic451 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic452 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic451(MovieClip.SYNCHED);
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
    }
    }

    const Graphic453 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic452(MovieClip.SYNCHED);
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
    }
    }

    const Graphic454 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic453(MovieClip.SYNCHED);
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
    }
    }

    const Graphic455 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic456 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic455(MovieClip.SYNCHED);
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
    }
    }

    const Graphic457 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic456(MovieClip.SYNCHED);
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
    }
    }

    const Graphic458 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic457(MovieClip.SYNCHED);
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
    }
    }

    const Graphic459 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic460 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic459(MovieClip.SYNCHED);
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
    }
    }

    const Graphic461 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic460(MovieClip.SYNCHED);
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
    }
    }

    const Graphic462 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic461(MovieClip.SYNCHED);
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
    }
    }

    const Graphic463 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic464 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic463(MovieClip.SYNCHED);
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
    }
    }

    const Graphic465 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic464(MovieClip.SYNCHED);
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
    }
    }

    const Graphic466 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic465(MovieClip.SYNCHED);
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
    }
    }

    const Graphic467 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic468 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic467(MovieClip.SYNCHED);
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
    }
    }

    const Graphic469 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic468(MovieClip.SYNCHED);
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
    }
    }

    const Graphic470 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic469(MovieClip.SYNCHED);
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
    }
    }

    const Graphic471 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic472 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic471(MovieClip.SYNCHED);
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
    }
    }

    const Graphic473 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic472(MovieClip.SYNCHED);
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
    }
    }

    const Graphic474 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic473(MovieClip.SYNCHED);
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
    }
    }

    const Graphic475 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic476 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic475(MovieClip.SYNCHED);
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
    }
    }

    const Graphic477 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic476(MovieClip.SYNCHED);
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
    }
    }

    const Graphic478 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic477(MovieClip.SYNCHED);
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
    }
    }

    const Graphic479 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic480 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic479(MovieClip.SYNCHED);
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
    }
    }

    const Graphic481 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic480(MovieClip.SYNCHED);
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
    }
    }

    const Graphic482 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic481(MovieClip.SYNCHED);
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
    }
    }

    const Graphic483 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic484 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic483(MovieClip.SYNCHED);
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
    }
    }

    const Graphic485 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic484(MovieClip.SYNCHED);
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
    }
    }

    const Graphic486 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic485(MovieClip.SYNCHED);
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
    }
    }

    const Graphic487 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic488 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic487(MovieClip.SYNCHED);
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
    }
    }

    const Graphic489 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic488(MovieClip.SYNCHED);
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
    }
    }

    const Graphic490 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic489(MovieClip.SYNCHED);
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
    }
    }

    const Graphic491 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic492 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic491(MovieClip.SYNCHED);
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
    }
    }

    const Graphic493 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic492(MovieClip.SYNCHED);
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
    }
    }

    const Graphic494 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic493(MovieClip.SYNCHED);
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
    }
    }

    const Graphic495 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance11 = new Graphic494(MovieClip.SYNCHED);
        const instance10 = new Graphic490(MovieClip.SYNCHED);
        const instance9 = new Graphic486(MovieClip.SYNCHED);
        const instance8 = new Graphic482(MovieClip.SYNCHED);
        const instance7 = new Graphic478(MovieClip.SYNCHED);
        const instance6 = new Graphic474(MovieClip.SYNCHED);
        const instance5 = new Graphic470(MovieClip.SYNCHED);
        const instance4 = new Graphic466(MovieClip.SYNCHED);
        const instance3 = new Graphic462(MovieClip.SYNCHED);
        const instance2 = new Graphic458(MovieClip.SYNCHED);
        const instance1 = new Graphic454(MovieClip.SYNCHED);
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
    }
    }

    const Graphic496 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic497 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic496(MovieClip.SYNCHED);
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
    }
    }

    const Graphic498 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic497(MovieClip.SYNCHED);
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
    }
    }

    const Graphic499 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic498(MovieClip.SYNCHED);
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
    }
    }

    const Graphic500 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic501 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic500(MovieClip.SYNCHED);
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
    }
    }

    const Graphic502 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic501(MovieClip.SYNCHED);
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
    }
    }

    const Graphic503 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic502(MovieClip.SYNCHED);
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
    }
    }

    const Graphic504 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic505 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic504(MovieClip.SYNCHED);
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
    }
    }

    const Graphic506 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic505(MovieClip.SYNCHED);
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
    }
    }

    const Graphic507 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic506(MovieClip.SYNCHED);
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
    }
    }

    const Graphic508 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic509 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic508(MovieClip.SYNCHED);
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
    }
    }

    const Graphic510 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic509(MovieClip.SYNCHED);
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
    }
    }

    const Graphic511 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic510(MovieClip.SYNCHED);
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
    }
    }

    const Graphic512 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic513 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic512(MovieClip.SYNCHED);
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
    }
    }

    const Graphic514 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic513(MovieClip.SYNCHED);
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
    }
    }

    const Graphic515 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic514(MovieClip.SYNCHED);
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
    }
    }

    const Graphic516 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic517 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic516(MovieClip.SYNCHED);
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
    }
    }

    const Graphic518 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic517(MovieClip.SYNCHED);
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
    }
    }

    const Graphic519 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic518(MovieClip.SYNCHED);
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
    }
    }

    const Graphic520 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic521 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic520(MovieClip.SYNCHED);
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
    }
    }

    const Graphic522 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic521(MovieClip.SYNCHED);
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
    }
    }

    const Graphic523 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic522(MovieClip.SYNCHED);
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
    }
    }

    const Graphic524 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic525 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic524(MovieClip.SYNCHED);
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
    }
    }

    const Graphic526 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic525(MovieClip.SYNCHED);
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
    }
    }

    const Graphic527 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic526(MovieClip.SYNCHED);
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
    }
    }

    const Graphic528 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic529 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic528(MovieClip.SYNCHED);
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
    }
    }

    const Graphic530 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic529(MovieClip.SYNCHED);
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
    }
    }

    const Graphic531 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic530(MovieClip.SYNCHED);
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
    }
    }

    const Graphic532 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic533 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic532(MovieClip.SYNCHED);
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
    }
    }

    const Graphic534 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic533(MovieClip.SYNCHED);
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
    }
    }

    const Graphic535 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic534(MovieClip.SYNCHED);
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
    }
    }

    const Graphic536 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphics()
            .drawCommands(data.shapes.tween_nested_multiple_instances[0]);
        this.addTimedChild(instance1);
    }
    }

    const Graphic537 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic536(MovieClip.SYNCHED);
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
    }
    }

    const Graphic538 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic537(MovieClip.SYNCHED);
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
    }
    }

    const Graphic539 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance1 = new Graphic538(MovieClip.SYNCHED);
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
    }
    }

    const Graphic540 = class extends MovieClip {
    constructor(mode) {
        super({ mode: mode, duration: 3, loop: false });
        const instance11 = new Graphic539(MovieClip.SYNCHED);
        const instance10 = new Graphic535(MovieClip.SYNCHED);
        const instance9 = new Graphic531(MovieClip.SYNCHED);
        const instance8 = new Graphic527(MovieClip.SYNCHED);
        const instance7 = new Graphic523(MovieClip.SYNCHED);
        const instance6 = new Graphic519(MovieClip.SYNCHED);
        const instance5 = new Graphic515(MovieClip.SYNCHED);
        const instance4 = new Graphic511(MovieClip.SYNCHED);
        const instance3 = new Graphic507(MovieClip.SYNCHED);
        const instance2 = new Graphic503(MovieClip.SYNCHED);
        const instance1 = new Graphic499(MovieClip.SYNCHED);
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
    }
    }

    data.lib.tween_nested_multiple_instances = class extends MovieClip {
    constructor() {
        super({
            duration: 3,
            framerate: 24
        });
        const instance12 = new Graphic540(MovieClip.SYNCHED)
            .setTransform(15.95, 15.15)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        const instance11 = new Graphic495(MovieClip.SYNCHED)
            .setTransform(16.5, 17.85)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        const instance10 = new Graphic450(MovieClip.SYNCHED)
            .setTransform(15.95, 15.15)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        const instance9 = new Graphic405(MovieClip.SYNCHED)
            .setTransform(15.1, 14.65)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        const instance8 = new Graphic360(MovieClip.SYNCHED)
            .setTransform(15.65, 17.35)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        const instance7 = new Graphic315(MovieClip.SYNCHED)
            .setTransform(11.75, 18.4)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        const instance6 = new Graphic270(MovieClip.SYNCHED)
            .setTransform(15.1, 14.65)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        const instance5 = new Graphic225(MovieClip.SYNCHED)
            .setTransform(17.1, 15.15)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        const instance4 = new Graphic180(MovieClip.SYNCHED)
            .setTransform(17.65, 17.85)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        const instance3 = new Graphic135(MovieClip.SYNCHED)
            .setTransform(17.1, 15.15)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        const instance2 = new Graphic90(MovieClip.SYNCHED)
            .setTransform(16.25, 14.65)
            .setColorTransform(1, 0, 1, 0, 1, 0);
        const instance1 = new Graphic45(MovieClip.SYNCHED)
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
    }
    }

    data.stage = data.lib.tween_nested_multiple_instances;

	}
};

module.exports = data;