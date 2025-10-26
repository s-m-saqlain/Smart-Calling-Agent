import Map from "../assets/images/map.png";

function Countries() {
  return (
    <>
      <div className="pt-12">
        <h2 class="text-center text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-10 sm:mb-16 lg:max-w-3xl sm:max-w-xl mx-auto leading-snug px-2">
          Esteemed by Users in <span>63+ Countries</span>
        </h2>
        <img src={Map} className="mx-auto" />
      </div>
    </>
  );
}
export default Countries;
