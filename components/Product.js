export default function Product({ img, name, price }) {
  return (
    <div>
      <div className='flex flex-col justify-center items-center my-5'>
        <img src={img} />
        <p className='text-5xl font-bold lowercase'>
          {name}: {price}
        </p>
      </div>
    </div>
  );
}
