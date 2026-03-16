const chaos = {
  level1: [
    {
      id: 1,
      data: {
        stuff: [
          { a: 10 },
          { b: 20 },
          {
            deeper: {
              arr: [
                "nope",
                "still nope",
                {
                  layer: [
                    { x: [1, 2, 3] },
                    {
                      y: {
                        z: [
                          { ignore: true },
                          {
                            more: [
                              42,
                              {
                                keepGoing: {
                                  items: [
                                    { random: "abc" },
                                    { random: "def" },
                                    {
                                      almost: {
                                        there: [
                                          "wrong",
                                          "not yet",
                                          {
                                            finalBoss: {
                                              box: [
                                                0,
                                                1,
                                                2,
                                                {
                                                  secret: {
                                                    tunnel: [
                                                      { nope: null },
                                                      {
                                                        maze: {
                                                          paths: [
                                                            [],
                                                            [
                                                              {
                                                                deeperStill: {
                                                                  treasure: [
                                                                    "fake",
                                                                    "decoy",
                                                                    {
                                                                      vault: {
                                                                        code: [
                                                                          7,
                                                                          8,
                                                                          9,
                                                                          {
                                                                            prize: {
                                                                              value: "TARGET_VALUE"
                                                                            }
                                                                          }
                                                                        ]
                                                                      }
                                                                    }
                                                                  ]
                                                                }
                                                              }
                                                            ]
                                                          ]
                                                        }
                                                      }
                                                    ]
                                                  }
                                                }
                                              ]
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          }
        ]
      }
    }
  ]
};
console.log(chaos.level1[0].data.stuff[2].deeper.arr[2].layer[1].y.z[1].more[1].keepGoing.items[2].almost.there[2].finalBoss.box[3].secret.tunnel[1].maze.paths[1][0].deeperStill.treasure[2].vault.code[3].prize.value);