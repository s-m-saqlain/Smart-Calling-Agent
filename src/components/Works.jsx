import BlogPost from "../assets/images/blog-post.png";
import Seo from "../assets/images/seo-expert.png";
import News from "../assets/images/news-articles.png";
import College from "../assets/images/college.png";
import Press from "../assets/images/press.png";
import Payment from "../assets/images/payment.png";

function Works() {
  return (
    <>
      <main className="min-h-screen sm:p-8 p-4">
        <div className="max-w-7xl mx-auto">
          <h1
            className="sm:ml-2 capitalize text-slate-900 mb-12 text-[48px]"
            style={{
              fontFamily: "Manrope",
              fontWeight: 500,
              fontStyle: "Medium",
              lineHeight: "57.6px",
              letterSpacing: "-0.96px",
              verticalAlign: "middle",
            }}
          >
            How It Works
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:mx-2">
            {[
              { img: BlogPost, title: "Blog Posts" },
              { img: Seo, title: "SEO Articles", imgClass: "w-64" },
              { img: News, title: "News Articles" },
              { img: College, title: "College Essays", imgClass: "w-24" },
              { img: Press, title: "Press Releases" },
              { img: Payment, title: "Payment Gateways" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#F0F2F8] rounded-lg p-8 shadow-sm transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 hover:shadow-md"
              >
                <img
                  src={item.img}
                  className={`mx-auto ${item.imgClass || ""}`}
                />
                <h4 className="text-lg text-center font-semibold text-slate-900 mb-2 pt-6">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-500 text-center">
                  Quisque tempus solarize rises kaibun ululate portico est
                  monchas cogue nib.
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Works;
