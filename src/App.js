import Header from "./components/Header";
import Search from "./components/Search";
import Articles from "./components/Articles";

function App() {
  const articles = [
    {
      title:
        "Gaming Chromebooks could be one step closer as Google adds Steam to Chrome OS",
      description:
        "It’s been a long road, but Chromebooks are finally about to get Steam support.",
      content:
        "Audio player loading…\nIf you’ve dreamed of a gaming Chromebook, those devices might just be a step closer with the news that Google has announced Steam support is finally arriving for Chrome OS.\nThe caveat here, though, is that the initial incarnatio... [2372 chars]",
      url: "https://www.techradar.com/news/gaming-chromebooks-could-be-one-step-closer-as-google-adds-steam-to-chrome-os",
      image:
        "https://cdn.mos.cms.futurecdn.net/gEfoxZ2Vkc94EufEj539JN-1200-80.jpg",
      publishedAt: "2022-03-17T12:01:17Z",
      source: {
        name: "TechRadar",
        url: "https://www.techradar.com",
      },
    },
    {
      title:
        "Google Play's new program brings a ton of goodies for large game developers",
      description:
        "At its Games Summit, Google launched the Google Play Partner Program to provide growth tools for large-scale game developers.",
      content:
        "What you need to know\nAt its Games Summit, Google announced a bunch of tools and product updates for large-scale game developers and studios.\nThe new Google Play Partner Program for Games offers unique resources to help developers speed up game relea... [2138 chars]",
      url: "https://www.androidcentral.com/google-play-partner-program-for-games-announced",
      image:
        "https://cdn.mos.cms.futurecdn.net/e3oziMso4keqn7RELPJfTJ-1200-80.png",
      publishedAt: "2022-03-17T11:45:27Z",
      source: {
        name: "Android Central",
        url: "https://www.androidcentral.com",
      },
    },
    {
      title:
        "Hey, Google, Stop Recording Those Embarrassing Searches: How to Delete Your Voice History",
      description:
        "You can purge all of those awkward Google Home or Google Nest voice searches by going to your My Activity page.",
      content:
        "Chris Monroe/CNET\nPeople were understandably freaked out when reports surfaced in 2019 that Google and Amazon were giving human contractors access to audio clips from their customers' Google Home (now Google Nest) and Echo devices. Google has since m... [4295 chars]",
      url: "https://www.cnet.com/home/smart-home/hey-google-stop-recording-those-embarrassing-searcches-how-to-delete-your-voice-history/",
      image:
        "https://www.cnet.com/a/img/resize/3fc170b1020c2ffcb29d93d41eeec58f276c02c6/2017/01/03/223e2291-bf35-43b4-853e-6254788c1dc1/google-home-voice.jpg?auto=webp&fit=crop&height=630&width=1200",
      publishedAt: "2022-03-17T11:00:00Z",
      source: {
        name: "CNET",
        url: "https://www.cnet.com",
      },
    },
  ];

  return (
    <>
      <Header />
      <Search />
      <Articles articles={articles} />
    </>
  );
}

export default App;
