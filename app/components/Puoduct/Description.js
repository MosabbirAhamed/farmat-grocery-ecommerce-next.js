import { EditorState, convertFromRaw } from "draft-js";
import { useState } from "react";
import draftToHtml from "draftjs-to-html";

const BODY =  {
    "blocks": [
        {
            "key": "8nvk8",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "8b6bu",
            "text": "Raised without antibiotics and full of flavor, this beef is the base of big, juicy burgers, savory meat loaf and rich Bolognese sauce. You can enjoy this delicious local ground beef for your meatloaf, burgers, meatballs, shepherd’s pie, spicy taco meat and so much more.",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 270,
                    "style": "color-rgb(55,65,81)"
                },
                {
                    "offset": 0,
                    "length": 270,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 270,
                    "style": "fontsize-18"
                },
                {
                    "offset": 0,
                    "length": 270,
                    "style": "fontfamily--apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif"
                },
                {
                    "offset": 0,
                    "length": 270,
                    "style": "color-rgb(102,102,102)"
                },
                {
                    "offset": 0,
                    "length": 270,
                    "style": "fontsize-14"
                },
                {
                    "offset": 0,
                    "length": 270,
                    "style": "fontfamily-Muli, sans-serif"
                }
            ],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "4hl4q",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "c6lvq",
            "text": "As one of Farmart’s premium beef suppliers, Local Angus works with a coalition of small family farms throughout the Mid-Atlantic region* who feed their cattle a diet of primarily grass, supplemented by grain throughout the finishing months. Every farm in this program is independently audited for animal welfare practices to ensure the best standards of care. ",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 43,
                    "style": "color-rgb(55,65,81)"
                },
                {
                    "offset": 44,
                    "length": 11,
                    "style": "color-rgb(55,65,81)"
                },
                {
                    "offset": 56,
                    "length": 303,
                    "style": "color-rgb(55,65,81)"
                },
                {
                    "offset": 0,
                    "length": 43,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 44,
                    "length": 11,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 56,
                    "length": 303,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 43,
                    "style": "fontsize-18"
                },
                {
                    "offset": 44,
                    "length": 11,
                    "style": "fontsize-18"
                },
                {
                    "offset": 56,
                    "length": 303,
                    "style": "fontsize-18"
                },
                {
                    "offset": 0,
                    "length": 43,
                    "style": "fontfamily--apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif"
                },
                {
                    "offset": 44,
                    "length": 11,
                    "style": "fontfamily--apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif"
                },
                {
                    "offset": 56,
                    "length": 303,
                    "style": "fontfamily--apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif"
                },
                {
                    "offset": 0,
                    "length": 43,
                    "style": "color-rgb(102,102,102)"
                },
                {
                    "offset": 44,
                    "length": 11,
                    "style": "color-rgb(102,102,102)"
                },
                {
                    "offset": 56,
                    "length": 303,
                    "style": "color-rgb(102,102,102)"
                },
                {
                    "offset": 0,
                    "length": 43,
                    "style": "fontsize-14"
                },
                {
                    "offset": 44,
                    "length": 11,
                    "style": "fontsize-14"
                },
                {
                    "offset": 56,
                    "length": 303,
                    "style": "fontsize-14"
                },
                {
                    "offset": 0,
                    "length": 43,
                    "style": "fontfamily-Muli, sans-serif"
                },
                {
                    "offset": 44,
                    "length": 11,
                    "style": "fontfamily-Muli, sans-serif"
                },
                {
                    "offset": 56,
                    "length": 303,
                    "style": "fontfamily-Muli, sans-serif"
                },
                {
                    "offset": 44,
                    "length": 11,
                    "style": "BOLD"
                }
            ],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "2p0sf",
            "text": "",
            "type": "header-four",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {
                "text-align": "start"
            }
        },
        {
            "key": "7p72d",
            "text": "\n",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "riuo",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "7h1h6",
            "text": "Preparation and Usage",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 21,
                    "style": "color-rgb(55,65,81)"
                },
                {
                    "offset": 0,
                    "length": 21,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 21,
                    "style": "fontsize-18"
                },
                {
                    "offset": 0,
                    "length": 21,
                    "style": "fontfamily--apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif"
                },
                {
                    "offset": 0,
                    "length": 21,
                    "style": "color-rgb(34,34,34)"
                },
                {
                    "offset": 0,
                    "length": 21,
                    "style": "fontfamily-Muli, Arial, sans-serif"
                }
            ],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "ffpvt",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {
                "text-align": "start"
            }
        },
        {
            "key": "767vn",
            "text": "For perfectly cooked beef, our head chef recommends:",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 52,
                    "style": "color-rgb(55,65,81)"
                },
                {
                    "offset": 0,
                    "length": 52,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 52,
                    "style": "fontsize-18"
                },
                {
                    "offset": 0,
                    "length": 52,
                    "style": "fontfamily--apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif"
                },
                {
                    "offset": 0,
                    "length": 52,
                    "style": "color-rgb(102,102,102)"
                },
                {
                    "offset": 0,
                    "length": 52,
                    "style": "fontsize-14"
                },
                {
                    "offset": 0,
                    "length": 52,
                    "style": "fontfamily-Muli, sans-serif"
                }
            ],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "2fo43",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {
                "text-align": "start"
            }
        },
        {
            "key": "4ncks",
            "text": "Storage",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 7,
                    "style": "color-rgb(55,65,81)"
                },
                {
                    "offset": 0,
                    "length": 7,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 7,
                    "style": "fontsize-18"
                },
                {
                    "offset": 0,
                    "length": 7,
                    "style": "fontfamily--apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif"
                },
                {
                    "offset": 0,
                    "length": 7,
                    "style": "color-rgb(34,34,34)"
                },
                {
                    "offset": 0,
                    "length": 7,
                    "style": "fontsize-14"
                },
                {
                    "offset": 0,
                    "length": 7,
                    "style": "fontfamily-Muli, Arial, sans-serif"
                }
            ],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "f5rd3",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {
                "text-align": "start"
            }
        },
        {
            "key": "1mbvr",
            "text": "\n",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "8vjj6",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "2lg5v",
            "text": "Keep refrigerated 0-5oC. Consume within the use by date. Once pack is opened use on the same day. Suitable for freezing on day of purchase. Use within one month. Defrost fully before use. Do not re-freeze once defrosted.",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 220,
                    "style": "color-rgb(55,65,81)"
                },
                {
                    "offset": 0,
                    "length": 220,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 220,
                    "style": "fontsize-18"
                },
                {
                    "offset": 0,
                    "length": 220,
                    "style": "fontfamily--apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif"
                },
                {
                    "offset": 0,
                    "length": 220,
                    "style": "color-rgb(102,102,102)"
                },
                {
                    "offset": 0,
                    "length": 220,
                    "style": "fontsize-14"
                },
                {
                    "offset": 0,
                    "length": 220,
                    "style": "fontfamily-Muli, sans-serif"
                }
            ],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "67vh",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "dhme1",
            "text": "Pan Fry",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 7,
                    "style": "color-rgb(55,65,81)"
                },
                {
                    "offset": 0,
                    "length": 7,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 7,
                    "style": "fontsize-18"
                },
                {
                    "offset": 0,
                    "length": 7,
                    "style": "fontfamily--apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif"
                },
                {
                    "offset": 0,
                    "length": 7,
                    "style": "color-rgb(34,34,34)"
                },
                {
                    "offset": 0,
                    "length": 7,
                    "style": "fontsize-14"
                },
                {
                    "offset": 0,
                    "length": 7,
                    "style": "fontfamily-Muli, Arial, sans-serif"
                }
            ],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "bhmcq",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "4ulu6",
            "text": "Pour a little oil into a frying pan and cook for 4-6 minutes until browned. If preferred, drain off excess fat. Add a good beef stock, seasonal vegetables and a sprinkling of sea salt and freshly ground black pepper. Bring to the boil and reduce heat to simmer for 20 minutes until the meat is thoroughly cooked and your kitchen smells delicious. Wash hands, knives and surfaces thoroughly before and after preparing raw meat.",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 426,
                    "style": "color-rgb(55,65,81)"
                },
                {
                    "offset": 0,
                    "length": 426,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 426,
                    "style": "fontsize-18"
                },
                {
                    "offset": 0,
                    "length": 426,
                    "style": "fontfamily--apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif"
                },
                {
                    "offset": 0,
                    "length": 426,
                    "style": "color-rgb(102,102,102)"
                },
                {
                    "offset": 0,
                    "length": 426,
                    "style": "fontsize-14"
                },
                {
                    "offset": 0,
                    "length": 426,
                    "style": "fontfamily-Muli, sans-serif"
                }
            ],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "ckl56",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "5njnv",
            "text": "Return To Address",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 17,
                    "style": "color-rgb(55,65,81)"
                },
                {
                    "offset": 0,
                    "length": 17,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 17,
                    "style": "fontsize-18"
                },
                {
                    "offset": 0,
                    "length": 17,
                    "style": "fontfamily--apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif"
                },
                {
                    "offset": 0,
                    "length": 17,
                    "style": "color-rgb(34,34,34)"
                },
                {
                    "offset": 0,
                    "length": 17,
                    "style": "fontsize-14"
                },
                {
                    "offset": 0,
                    "length": 17,
                    "style": "fontfamily-Muli, Arial, sans-serif"
                }
            ],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "50aql",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "63mda",
            "text": "Daylesford near Kingham, Gloucestershire GL56 0YG",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 49,
                    "style": "color-rgb(55,65,81)"
                },
                {
                    "offset": 0,
                    "length": 49,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 49,
                    "style": "fontsize-18"
                },
                {
                    "offset": 0,
                    "length": 49,
                    "style": "fontfamily--apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif"
                },
                {
                    "offset": 0,
                    "length": 49,
                    "style": "color-rgb(102,102,102)"
                },
                {
                    "offset": 0,
                    "length": 49,
                    "style": "fontsize-14"
                },
                {
                    "offset": 0,
                    "length": 49,
                    "style": "fontfamily-Muli, sans-serif"
                }
            ],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "4qa9u",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "1iqb8",
            "text": "Country of Origin",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 17,
                    "style": "color-rgb(55,65,81)"
                },
                {
                    "offset": 0,
                    "length": 17,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 17,
                    "style": "fontsize-18"
                },
                {
                    "offset": 0,
                    "length": 17,
                    "style": "fontfamily--apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif"
                },
                {
                    "offset": 0,
                    "length": 17,
                    "style": "color-rgb(34,34,34)"
                },
                {
                    "offset": 0,
                    "length": 17,
                    "style": "fontsize-14"
                },
                {
                    "offset": 0,
                    "length": 17,
                    "style": "fontfamily-Muli, Arial, sans-serif"
                }
            ],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "ab82f",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "9os1n",
            "text": "UK",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 2,
                    "style": "color-rgb(55,65,81)"
                },
                {
                    "offset": 0,
                    "length": 2,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 2,
                    "style": "fontsize-18"
                },
                {
                    "offset": 0,
                    "length": 2,
                    "style": "fontfamily--apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif"
                },
                {
                    "offset": 0,
                    "length": 2,
                    "style": "color-rgb(102,102,102)"
                },
                {
                    "offset": 0,
                    "length": 2,
                    "style": "fontsize-14"
                },
                {
                    "offset": 0,
                    "length": 2,
                    "style": "fontfamily-Muli, sans-serif"
                }
            ],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "3r13e",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "u7fr",
            "text": "Package Type",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 12,
                    "style": "color-rgb(55,65,81)"
                },
                {
                    "offset": 0,
                    "length": 12,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 12,
                    "style": "fontsize-18"
                },
                {
                    "offset": 0,
                    "length": 12,
                    "style": "fontfamily--apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif"
                },
                {
                    "offset": 0,
                    "length": 12,
                    "style": "color-rgb(34,34,34)"
                },
                {
                    "offset": 0,
                    "length": 12,
                    "style": "fontsize-14"
                },
                {
                    "offset": 0,
                    "length": 12,
                    "style": "fontfamily-Muli, Arial, sans-serif"
                }
            ],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "2soqa",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "3nf08",
            "text": "Box & Sleeve",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 12,
                    "style": "color-rgb(55,65,81)"
                },
                {
                    "offset": 0,
                    "length": 12,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 12,
                    "style": "fontsize-18"
                },
                {
                    "offset": 0,
                    "length": 12,
                    "style": "fontfamily--apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif"
                },
                {
                    "offset": 0,
                    "length": 12,
                    "style": "color-rgb(102,102,102)"
                },
                {
                    "offset": 0,
                    "length": 12,
                    "style": "fontsize-14"
                },
                {
                    "offset": 0,
                    "length": 12,
                    "style": "fontfamily-Muli, sans-serif"
                }
            ],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "b0not",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "4gat7",
            "text": "Recycling Information",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 21,
                    "style": "color-rgb(55,65,81)"
                },
                {
                    "offset": 0,
                    "length": 21,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 21,
                    "style": "fontsize-18"
                },
                {
                    "offset": 0,
                    "length": 21,
                    "style": "fontfamily--apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif"
                },
                {
                    "offset": 0,
                    "length": 21,
                    "style": "color-rgb(34,34,34)"
                },
                {
                    "offset": 0,
                    "length": 21,
                    "style": "fontsize-14"
                },
                {
                    "offset": 0,
                    "length": 21,
                    "style": "fontfamily-Muli, Arial, sans-serif"
                }
            ],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "2o8h9",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {
                "text-align": "start"
            }
        },
        {
            "key": "cfn19",
            "text": "You’ll never be given a plastic carrier bag in our farm shops, and for this packaging we’ve chosen a tray that is 70% post-consumer recycled material. Like this FSC-certified cardboard, it is fully recyclable & rechangable.",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 223,
                    "style": "color-rgb(55,65,81)"
                },
                {
                    "offset": 0,
                    "length": 223,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 223,
                    "style": "fontsize-18"
                },
                {
                    "offset": 0,
                    "length": 223,
                    "style": "fontfamily--apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif"
                },
                {
                    "offset": 0,
                    "length": 223,
                    "style": "color-rgb(102,102,102)"
                },
                {
                    "offset": 0,
                    "length": 223,
                    "style": "fontsize-14"
                },
                {
                    "offset": 0,
                    "length": 223,
                    "style": "fontfamily-Muli, sans-serif"
                }
            ],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "c71m2",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "fdoch",
            "text": "Other Information",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 17,
                    "style": "color-rgb(55,65,81)"
                },
                {
                    "offset": 0,
                    "length": 17,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 17,
                    "style": "fontsize-18"
                },
                {
                    "offset": 0,
                    "length": 17,
                    "style": "fontfamily--apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif"
                },
                {
                    "offset": 0,
                    "length": 17,
                    "style": "color-rgb(34,34,34)"
                },
                {
                    "offset": 0,
                    "length": 17,
                    "style": "fontsize-14"
                },
                {
                    "offset": 0,
                    "length": 17,
                    "style": "fontfamily-Muli, Arial, sans-serif"
                }
            ],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "lk5q",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {
                "text-align": "start"
            }
        },
        {
            "key": "4t7f9",
            "text": "GB-ORG-05, EU AgricultureUK 4707 ECPackaged in a protective atmosphere",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 70,
                    "style": "color-rgb(55,65,81)"
                },
                {
                    "offset": 0,
                    "length": 70,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 70,
                    "style": "fontsize-18"
                },
                {
                    "offset": 0,
                    "length": 70,
                    "style": "fontfamily--apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif"
                },
                {
                    "offset": 0,
                    "length": 70,
                    "style": "color-rgb(102,102,102)"
                },
                {
                    "offset": 0,
                    "length": 70,
                    "style": "fontsize-14"
                },
                {
                    "offset": 0,
                    "length": 70,
                    "style": "fontfamily-Muli, sans-serif"
                }
            ],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "70to8",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "d5963",
            "text": "We’ve been farming organically for over 35 years, meaning our animals enjoy their natural grass and forage-based diet, growing into strong and healthy animals, free from unnecessary chemicals, antibiotics and GM feed.",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 217,
                    "style": "color-rgb(55,65,81)"
                },
                {
                    "offset": 0,
                    "length": 217,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 217,
                    "style": "fontsize-18"
                },
                {
                    "offset": 0,
                    "length": 217,
                    "style": "fontfamily--apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif"
                },
                {
                    "offset": 0,
                    "length": 217,
                    "style": "color-rgb(102,102,102)"
                },
                {
                    "offset": 0,
                    "length": 217,
                    "style": "fontsize-14"
                },
                {
                    "offset": 0,
                    "length": 217,
                    "style": "fontfamily-Muli, sans-serif"
                }
            ],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "2bglt",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {
                "text-align": "start"
            }
        },
        {
            "key": "2fmaj",
            "text": "We choose British breeds who thrive in their native landscape and encourage healthy biodiversity on our farm. We avoid waste of any kind, so manure and kitchen waste compost are returned to the soil as rich natural fertilisers. We have built our own abattoir to ensure the highest animal welfare and reduced food miles, which results in better tasting meat, and we spread our message far beyond the boundaries of our own fields.",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 428,
                    "style": "color-rgb(55,65,81)"
                },
                {
                    "offset": 0,
                    "length": 428,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 428,
                    "style": "fontsize-18"
                },
                {
                    "offset": 0,
                    "length": 428,
                    "style": "fontfamily--apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif"
                },
                {
                    "offset": 0,
                    "length": 428,
                    "style": "color-rgb(102,102,102)"
                },
                {
                    "offset": 0,
                    "length": 428,
                    "style": "fontsize-14"
                },
                {
                    "offset": 0,
                    "length": 428,
                    "style": "fontfamily-Muli, sans-serif"
                }
            ],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "1206u",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        },
        {
            "key": "fmhgh",
            "text": "Each step of our journey is made with a conscience, and a love for food.  ",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 72,
                    "style": "color-rgb(55,65,81)"
                },
                {
                    "offset": 0,
                    "length": 72,
                    "style": "bgcolor-rgb(255,255,255)"
                },
                {
                    "offset": 0,
                    "length": 72,
                    "style": "fontsize-18"
                },
                {
                    "offset": 0,
                    "length": 72,
                    "style": "fontfamily--apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif"
                },
                {
                    "offset": 0,
                    "length": 72,
                    "style": "color-rgb(102,102,102)"
                },
                {
                    "offset": 0,
                    "length": 72,
                    "style": "fontsize-14"
                },
                {
                    "offset": 0,
                    "length": 72,
                    "style": "fontfamily-Muli, sans-serif"
                }
            ],
            "entityRanges": [],
            "data": {
                "text-align": "left"
            }
        }
    ],
    "entityMap": {}
}
const Description = () => {

  const [local, setLocal] = useState(draftToHtml(BODY));



  return (
    <div className="prose prose-sm max-w-none">
      <div className="preview" dangerouslySetInnerHTML={{ __html: local }} />
    </div>
  )
}

export default Description