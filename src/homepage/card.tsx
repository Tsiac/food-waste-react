type CardProps = {
    text: string,
    img: string
}

export const Card = ({text, img}: CardProps) => 
    <>
        
        <a href="#" className="flex flex-row items-center bg-yellowfade border rounded-lg m-5 h-20 w-auto">
            <div className="flex flex-col justify-between p-2 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-900 dark:text-green">{text}</h5>
            </div>
            <img className="object-cover rounded-t-lg h-auto w-24" src={img} alt="" />
        </a>
    </>

