//
{
  interface Userinterface<B, C> {
    title: string;
    islock: B;
    contect: C[];
  }
  type inters = {
    name: string;
  };
  let hd: Userinterface<boolean, inters> = {
    title: "asd",
    islock: true,
    contect: [{ name: "ds" }],
  };
  console.log(hd);
}
