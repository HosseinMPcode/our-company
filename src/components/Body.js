// import homeLaptop from "./../../public/images/homeLaptop.jpg";
export default function Body({ activeBody }) {
  return (
    <div>
      {activeBody === 0 ? (
        <BodyHomeZero />
      ) : activeBody === 1 ? (
        <BodyGallaryOne />
      ) : (
        <BodyAboutUsTwo />
      )}
    </div>
  );
}
function BodyHomeZero() {
  return (
    <>
      <div className="d-flex flex-row mb-2 justify-content-center align-items-center">
        <img className="w-50 p-5" src="/images/homeLaptop.jpg" alt="laptop" />
        <div className="p-5 text-end fs-3">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،
        </div>
      </div>
      <div className="bg-primary mb-5 m-auto w-75 rounded-4 text-white p-3 d-flex justify-content-evenly  align-items-center">
        <h2>0912000001</h2>
        <h2>با ما تماس بگیرید</h2>
      </div>
    </>
  );
}
function BodyGallaryOne() {
  return (
    <>
      <div class="row row-cols-1 row-cols-md-3 g-4 p-5 w-100">
        <div class="col">
          <div class="card">
            <img src="/images/laptop2.webp" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-center">لپ تاپ -۱</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="/images/laptop2.webp" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-center">لپ تاپ -۲</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="/images/laptop2.webp" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-center">لپ تاپ -۳</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex row-cols-1 row-cols-md-2">
        <img
          className="p-5 rounded-5"
          src="/images/laptop1.webp"
          alt="laptop"
        />
        <img className="p-5" src="/images/laptop1.webp" alt="laptop" />
      </div>
    </>
  );
}
function BodyAboutUsTwo() {
  return (
    <div className="d-flex justify-content-center">
      <div class="card mb-3 text-end " style={{ maxWidth: " 90%" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="/images/ryan.jpg"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h1 class="card-title">رادمان محمدی نژاد</h1>
              <p class="card-text fs-5">
                رادمان محمدی‌نژاد، دانشجوی دانشکده فنی حرفه‌ای باهنر شیراز،
                متولد سال ۱۳۸۵ است. او با علاقه‌مندی به یادگیری مهارت‌های فنی و
                حرفه‌ای، در رشته‌ای مرتبط با تکنولوژی و صنعت تحصیل می‌کند.
                روحیه‌ای خلاق و تلاش‌گر دارد و همواره به دنبال کسب دانش و
                تجربه‌های جدید در زمینه‌های مورد علاقه خود است. رادمان با پشتکار
                و انگیزه در مسیر پیشرفت تحصیلی و حرفه‌ای قدم برمی‌دارد و در محیط
                دانشگاه، به عنوان فردی مسئولیت‌پذیر و پویا شناخته می‌شود.
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
