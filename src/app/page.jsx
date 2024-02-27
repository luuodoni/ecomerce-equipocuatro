import HeaderCardLink from "@/components/header/headerCardLink/HeaderCardLink";
import imagenPrueba from '../../public/next.svg'
import './globals.css'


export default function Home() {
  return (
    <HeaderCardLink
     title='Prueba'
     url='#'
     img={imagenPrueba}
     alt='Imagen Prueba'
     classFlex=''
    />
  );
}

