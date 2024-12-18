
// eslint-disable-next-line react/prop-types
const Title = ({subTitle, title}) => {
  return (
    <div className="flex flex-col items-center mt-20 text-blue-700">
      <p className="font-bold text-sm lg:text-md">{subTitle}</p>
      <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mt-3 text-none">{title}</h2>
    </div>
  );
}

export default Title
