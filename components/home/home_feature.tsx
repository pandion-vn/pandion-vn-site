import Link from 'next/link';

const HomeFeature = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row justify-ontent-center">
          <div className="col-12">
            <div className="section-title text-center mb-4 pb-2">
              <h4 className="title mb-4">Các giải pháp nền tảng tiên tiến</h4>
              <p className="text-muted para-desc mb-0 mx-auto">
                <span className="text-primary fw-bold">Pandion</span> is a
                full-fledged, end-to-end solutions provider. We're here to help
                you grow your business or organization, so that you can focus on
                what's most important to you.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {/* {{ $page := . }}
          {{ range $.Params.solutions }}
          {{ $solution := . }}
          {{- partial "card/solution-card" (dict "context" $page "solution_title" $solution.title "solution_icon" $solution.icon) -}}
          {{ end }} */}

          <div className="col-12 mt-4 pt-2 text-center">
            <Link href="#" className="btn btn-primary">
              Xem Thêm <i className="mdi mdi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeFeature;
