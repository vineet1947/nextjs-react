import Image from 'next/image'
import Link from 'next/link'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const getSinleDrink = async (id) => {
  const res = await fetch(`${url}${id}`)
  if (!res.ok) {
    throw new Error('failed to fetch drink with id', id)
  }
  return res.json()
}

const SingleDrinkPage = async ({ params }) => {
  const data = await getSinleDrink(params.id)
  const title = data?.drinks?.[0]?.strDrink
  const imgSrc = data?.drinks?.[0]?.strDrinkThumb
  console.log(title, imgSrc)
  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to drinks
      </Link>
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className="w-48 h-48 rounded-lg shadow-lg mb-4"
        priority
        alt={title}
      />
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  )
}

export default SingleDrinkPage
