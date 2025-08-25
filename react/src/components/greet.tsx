type GreetProps = {
  name: string;
}
// functional components
export default function Greet(props: GreetProps) {
    return <h1>Hello {props.name}</h1>
}


// using arrow functions
//  const Greet = () => <h1>Hello</h1>
 
// export default Greet