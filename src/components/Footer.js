export default function Footer() {
  return (
    <div
      className=" d-flex gap-5 flex-row-reverse align-items-center  justify-content-around border border-bottom-0 border-5 border-primary rounded-top-5"
      style={{ height: "200px", marginTop: "200px" }}
    >
      <div className="d-flex flex-column text-end">
        <span>خانه</span>
        <span>گالری</span>
        <span>درباره ما</span>
      </div>
      <div className="text-end">
        <h3>آدرس</h3>
        <p>چهار راه دارالرحمه دانشکده فنی حرفه ای شهید باهنر</p>
        <p>شماره تماس : ۰۹۱۲۰۰۰۰۰۱</p>
      </div>

      <div className="p-2" style={{ width: "15%" }}>
        <div className="row">
          <img className="col-6" src="/images/laptop3.webp" alt="laptop" />
          <img className="col-6" src="/images/laptop3.webp" alt="laptop" />
        </div>
        <div className="row">
          <img className="col-6" src="/images/laptop3.webp" alt="laptop" />
          <img className="col-6" src="/images/laptop3.webp" alt="laptop" />
        </div>
      </div>
    </div>
  );
}
