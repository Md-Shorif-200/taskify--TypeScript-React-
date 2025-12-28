
type ContainerProps = {
     children : React.ReactNode
}


export default function Container({children}:ContainerProps) {
  return (
    <div className="w-full lg:w-4xl mx-auto ">
         {children}
    </div>
  )
}
