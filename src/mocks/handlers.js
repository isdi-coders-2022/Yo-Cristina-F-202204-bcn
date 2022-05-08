import { rest } from "msw";
import { endpoint } from "../paths/endpoint";
const urlAPI = process.env.REACT_APP_API_URL;
const urlAPIlocal = process.env.REACT_APP_LOCAL_API_URL;

export const handlers = [
  rest.get(`${urlAPI}${endpoint.fish}`, (_req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          "file-name": "bitterling",
          name: {
            "name-USen": "bitterling",
            "name-EUen": "bitterling",
            "name-EUde": "Bitterling",
            "name-EUes": "amarguillo",
            "name-USes": "amarguillo",
            "name-EUfr": "bouvière",
            "name-USfr": "bouvière",
            "name-EUit": "rodeo",
            "name-EUnl": "bittervoorn",
            "name-CNzh": "红目鲫",
            "name-TWzh": "紅目鯽",
            "name-JPja": "タナゴ",
            "name-KRko": "납줄개",
            "name-EUru": "горчак",
          },
          availability: {
            "month-northern": "11-3",
            "month-southern": "5-9",
            time: "",
            isAllDay: true,
            isAllYear: false,
            location: "River",
            rarity: "Common",
            "month-array-northern": [11, 12, 1, 2, 3],
            "month-array-southern": [5, 6, 7, 8, 9],
            "time-array": [
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              19, 20, 21, 22, 23,
            ],
          },
          shadow: "Smallest (1)",
          price: 900,
          "price-cj": 1350,
          "catch-phrase":
            "I caught a bitterling! It's mad at me, but only a little.",
          "museum-phrase":
            "Bitterlings hide their eggs inside large bivalves—like clams—where the young can stay safe until grown. The bitterling isn't being sneaky. No, their young help keep the bivalve healthy by eating invading parasites! It's a wonderful bit of evolutionary deal making, don't you think? Each one keeping the other safe... Though eating parasites does not sound like a happy childhood... Is that why the fish is so bitter?",
          image_uri: "https://acnhapi.com/v1/images/fish/1",
          icon_uri: "https://acnhapi.com/v1/icons/fish/1",
        },
        {
          id: 2,
          "file-name": "pale_chub",
          name: {
            "name-USen": "pale chub",
            "name-EUen": "pale chub",
            "name-EUde": "Döbel",
            "name-EUes": "cacho",
            "name-USes": "cacho",
            "name-EUfr": "chevaine",
            "name-USfr": "chevaine",
            "name-EUit": "zacco",
            "name-EUnl": "Japanse drakenvis",
            "name-CNzh": "溪哥",
            "name-TWzh": "溪哥",
            "name-JPja": "オイカワ",
            "name-KRko": "피라미",
            "name-EUru": "светлый закко",
          },
          availability: {
            "month-northern": "",
            "month-southern": "",
            time: "9am - 4pm",
            isAllDay: false,
            isAllYear: true,
            location: "River",
            rarity: "Common",
            "month-array-northern": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            "month-array-southern": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            "time-array": [9, 10, 11, 12, 13, 14, 15],
          },
          shadow: "Smallest (1)",
          price: 200,
          "price-cj": 300,
          "catch-phrase":
            "I caught a pale chub! That name seems a bit judgy...",
          "museum-phrase":
            "The pale chub is a river fish with simple back-and-silver coloring. Interestingly, the males' coloring becomes most vibrant when he's trying to attract a mate! Though normally plain, these fellows really know how to look stylish when they want to. Perhaps I could learn a thing or two from the pale chub...",
          image_uri: "https://acnhapi.com/v1/images/fish/2",
          icon_uri: "https://acnhapi.com/v1/icons/fish/2",
        },
      ])
    )
  ),
  rest.get(`${urlAPIlocal}${endpoint.fish}`, (_req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json([
        {
          id: 74,
          "file-name": "great_white_shark",
          name: {
            "name-USen": "great white shark",
            "name-EUen": "great white shark",
            "name-EUde": "Hai",
            "name-EUes": "tiburón",
            "name-USes": "tiburón",
            "name-EUfr": "grand requin blanc",
            "name-USfr": "grand requin blanc",
            "name-EUit": "squalo bianco",
            "name-EUnl": "witte haai",
            "name-CNzh": "鲨鱼",
            "name-TWzh": "鯊魚",
            "name-JPja": "サメ",
            "name-KRko": "상어",
            "name-EUru": "большая белая акула",
          },
          availability: {
            "month-northern": "6-9",
            "month-southern": "12-3",
            time: "4pm - 9am",
            isAllDay: false,
            isAllYear: false,
            location: "Sea",
            rarity: "Rare",
            "month-array-northern": [6, 7, 8, 9],
            "month-array-southern": [12, 1, 2, 3],
            "time-array": [
              16, 17, 18, 19, 20, 21, 22, 23, 0, 1, 2, 3, 4, 5, 6, 7, 8,
            ],
          },
          shadow: "Largest with fin (6)",
          price: 15000,
          "price-cj": 22500,
          "catch-phrase":
            "I caught a great white shark! Watch out for its jaws!",
          "museum-phrase":
            "Great white sharks are obviously known first and foremost for their biting. They are masters of the craft! They do lose teeth regularly through biting-related activities, but, luckily, those teeth grow back quickly. In fact, their missing teeth can be regrown in a single day. Just imagine their tooth-fairy-related income!",
          image_uri: "https://acnhapi.com/v1/images/fish/74",
          icon_uri: "https://acnhapi.com/v1/icons/fish/74",
        },
        {
          id: 75,
          "file-name": "whale_shark",
          name: {
            "name-USen": "whale shark",
            "name-EUen": "whale shark",
            "name-EUde": "Walhai",
            "name-EUes": "tiburón ballena",
            "name-USes": "tiburón ballena",
            "name-EUfr": "requin-baleine",
            "name-USfr": "requin-baleine",
            "name-EUit": "squalo balena",
            "name-EUnl": "walvishaai",
            "name-CNzh": "鲸鲨",
            "name-TWzh": "鯨鯊",
            "name-JPja": "ジンベエザメ",
            "name-KRko": "고래상어",
            "name-EUru": "китовая акула",
          },
          availability: {
            "month-northern": "6-9",
            "month-southern": "12-3",
            time: "",
            isAllDay: true,
            isAllYear: false,
            location: "Sea",
            rarity: "Rare",
            "month-array-northern": [6, 7, 8, 9],
            "month-array-southern": [12, 1, 2, 3],
            "time-array": [
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              19, 20, 21, 22, 23,
            ],
          },
          shadow: "Largest with fin (6)",
          price: 13000,
          "price-cj": 19500,
          "catch-phrase":
            "Thar she blows! I caught a whale shark! I'm tellin' ya, it was thiiiiiiiiiiiiiiiiiiiis big!",
          "museum-phrase":
            "The mighty whale shark is the largest species of fish in the world with specimens up to 60 feet long! Unlike many of their kin in the shark family, whale sharks are nonviolent, eating only plankton and such. They grow slowly and live long, relaxed lives of filter feeding and leisure in warm waters. So if you ever have to choose a fish as a roommate, you could do worse than the whale shark. Unless you can't swim.",
          image_uri: "https://acnhapi.com/v1/images/fish/75",
          icon_uri: "https://acnhapi.com/v1/icons/fish/75",
        },
      ])
    )
  ),
];
