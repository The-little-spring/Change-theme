import { useContext } from "react";
import "./App.css";
import Header from "./Components/header";
import { ThemeContext } from "./context";

function App() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`${
        darkMode ? "bg-dark text-light" : "bg-secondary text-dark"
      }`}
    >
      <Header />
      <div className="container p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit
        doloribus eum possimus quis ullam ad quo, reprehenderit tempora quos,
        distinctio magnam incidunt, expedita sequi quasi repellat quae
        perspiciatis voluptates illum culpa iusto voluptas ratione!
        Reprehenderit in, sapiente quam error corrupti ad modi! Quo repellendus
        praesentium ipsam ullam fugiat cupiditate ratione, optio dolores
        corrupti ipsa asperiores iste animi explicabo culpa doloremque delectus
        iusto veritatis quasi sint nam quaerat dolor debitis illum tempore?
        Magnam rem asperiores natus architecto autem facilis quis itaque error
        cumque, voluptatibus eveniet dolorum, cum nisi ab adipisci molestiae
        ipsam aliquid, magni repudiandae? Numquam explicabo ad, aliquam
        praesentium nobis repellat consectetur veniam ea assumenda molestiae
        iusto omnis deleniti cum, provident nesciunt consequatur in odit ex.
        Voluptatum amet qui vitae quas numquam magnam nesciunt, perferendis et
        quam at unde eligendi velit, nihil, magni explicabo harum aliquid
        sapiente delectus voluptatibus molestiae obcaecati reprehenderit facere
        quasi? Itaque autem dignissimos modi vel. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Sunt fugit doloribus eum possimus quis
        ullam ad quo, reprehenderit tempora quos, distinctio magnam incidunt,
        expedita sequi quasi repellat quae perspiciatis voluptates illum culpa
        iusto voluptas ratione! Reprehenderit in, sapiente quam error corrupti
        ad modi! Quo repellendus praesentium ipsam ullam fugiat cupiditate
        ratione, optio dolores corrupti ipsa asperiores iste animi explicabo
        culpa doloremque delectus iusto veritatis quasi sint nam quaerat dolor
        debitis illum tempore? Magnam rem asperiores natus architecto autem
        facilis quis itaque error cumque, voluptatibus eveniet dolorum, cum nisi
        ab adipisci molestiae ipsam aliquid, magni repudiandae? Numquam
        explicabo ad, aliquam praesentium nobis repellat consectetur veniam ea
        assumenda molestiae iusto omnis deleniti cum, provident nesciunt
        consequatur in odit ex. Voluptatum amet qui vitae quas numquam magnam
        nesciunt, perferendis et quam at unde eligendi velit, nihil, magni
        explicabo harum aliquid sapiente delectus voluptatibus molestiae
        obcaecati reprehenderit facere quasi? Itaque autem dignissimos modi
        vel.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit
        doloribus eum possimus quis ullam ad quo, reprehenderit tempora quos,
        distinctio magnam incidunt, expedita sequi quasi repellat quae
        perspiciatis voluptates illum culpa iusto voluptas ratione!
        Reprehenderit in, sapiente quam error corrupti ad modi! Quo repellendus
        praesentium ipsam ullam fugiat cupiditate ratione, optio dolores
        corrupti ipsa asperiores iste animi explicabo culpa doloremque delectus
        iusto veritatis quasi sint nam quaerat dolor debitis illum tempore?
        Magnam rem asperiores natus architecto autem facilis quis itaque error
        cumque, voluptatibus eveniet dolorum, cum nisi ab adipisci molestiae
        ipsam aliquid, magni repudiandae? Numquam explicabo ad, aliquam
        praesentium nobis repellat consectetur veniam ea assumenda molestiae
        iusto omnis deleniti cum, provident nesciunt consequatur in odit ex.
        Voluptatum amet qui vitae quas numquam magnam nesciunt, perferendis et
        quam at unde eligendi velit, nihil, magni explicabo harum aliquid
        sapiente delectus voluptatibus molestiae obcaecati reprehenderit facere
        quasi? Itaque autem dignissimos modi vel.
      </div>
    </div>
  );
}

export default App;
