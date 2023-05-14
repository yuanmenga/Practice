//type其实和interface差不多
{
  type istrue = boolean;
  type sistrue = "boy" | "girl";

  type User = {
    name: string;
    age: number;
    ahs: istrue;
    ahsad: sistrue;
  };
  interface Users {
    name: string;
    age: number;
  }
  let hd: User = {
    name: "houdunren",
    age: 12,
    ahs: false,
    ahsad: "girl",
  };
}
