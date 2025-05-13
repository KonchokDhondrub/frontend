import "./Lesson06.css";

export default function Lesson06() {
  // ! typescript

  // * string
  let username: string = "Pavel";
  username = "Daria";

  // * number
  let number: number = 42;
  number = 4.33;

  // * boolean
  let isAdmin: boolean = true;
  isAdmin = 10 < 2; // это false

  // * null | undefined
  const nothing: undefined = undefined;
  let empty: null = null;

  // * union type (объединение типов)
  let value: string | number = 42;

  //* type literals (литеральные/буквальные типы)
  let userRole: "ADMIN" | "CLIENT" | "GUEST" = "ADMIN";

  console.log("Type: ", typeof userRole);

  // * arrays (массивы)
  const colors: string[] = ["red", "green", "blue"];
  colors.push("magenta");

  // * tupel (кортеж)
  const person: [string, number] = ["John", 35];

  // * strincted
  let planet: readonly [string, boolean] = ["Earth", true];

  // ! ts-nocheck
  // отключить проверку для всего файла
  // ! ts-ignore
  // можно отключить проверку типов для одной строки

  //* @ts-ignore
  // colors.push(42);

  // * functions
  // в функциях обяхательной являеться типизация параметров
  // типизация возвращённых значений может быть как явной так и не явной
  function sum(a: number, b: number): string {
    return "сумма: " + (a + b);
  }
  sum(44, 66);

  const showMessage = (message: string | number): void => {
    console.log("your message:" + message);
  };

  // showMessage("🌞");
  // showMessage(33);

  // * any
  let someValue: any = "whatever you want";
  someValue = 10 + 90 + "d";
  someValue = undefined;

  return (
    <div className="lesson06-container">
      <h1>Lesson 06: TypeScript pt1 💁‍♂️</h1>
      <p>Самое интересное на этом уроке происходит в теле функции и в командной строке</p>
      <p>
        <b>
          let: <i>string</i>
        </b>{" "}
        - {username}
      </p>
      <p>
        <b>
          let: <i>number</i>
        </b>{" "}
        - {number}
      </p>
      <p>
        <b>
          let: <i>boolean</i>
        </b>{" "}
        - {isAdmin ? "True" : "False"}
      </p>
      <p>
        <b>
          let: <i>undefined</i>
        </b>{" "}
        - {nothing}nothing
      </p>
      <p>
        <b>
          let: <i>null</i>
        </b>{" "}
        - {empty}null
      </p>
      <p>
        <b>
          let: <i>string | number</i> (union type)
        </b>{" "}
        - {value}
      </p>
      <p>
        <b>
          const: <i>"ADMIN" | "CLIENT" | "GUEST"</i> (literal)
        </b>{" "}
        - {userRole}
      </p>
      <p>
        <b>
          const: <i>string[]</i> = ["","",""] (arrays: string[])
        </b>{" "}
        - {colors.join(", ")}
      </p>
      <p>
        <b>
          let <i>[string, number]</i> (tupel)
        </b>{" "}
        - {person.join(", ")}
      </p>
      <p>
        <b>
          let: <i>readonly</i> [string, boolean] (stricted)
        </b>{" "}
        - {planet.join(", ")}
      </p>
      <p>
        <b>
          function sum(a<i>: number</i> , b<i>: number</i>)<i>: string</i> '{' return "сумма: " + (a + b) '}'
        </b>{" "}
        - sum(44, 66) = {sum(44, 66)}
      </p>
    </div>
  );
}
