const FAQ = () => {
  return (
    <div>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <div className="accordion mb-5" id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What services do you offer?
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                At our company, we pride ourselves on offering an extensive
                array of services to cater to your digital needs. Our services
                include top-tier web development, crafting responsive and
                visually stunning websites tailored specifically for your
                business. Additionally, we provide custom mobile application
                development for both iOS and Android platforms. Our UI/UX design
                services focus on creating intuitive, user-friendly interfaces
                to ensure a seamless user experience. We also specialize in
                digital marketing strategies that aim to boost your online
                presence, SEO services to enhance your website's visibility on
                search engines, and engaging content creation that captivates
                your audience.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  How do I get started with your services?
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                {" "}
                To kickstart your project with us, you can reach out through our
                contact page on the website or simply fill in the inquiry form.
                We're committed to promptly getting in touch with you and
                discussing your needs to provide the best solution possible for
                your business.
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Do you provide ongoing support and maintenance after the
                  project is completed?
                </button>
              </h2>
            </div>

            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                Yes, our commitment extends beyond project completion. We offer
                post-project support and maintenance services to ensure your
                website or application functions smoothly, stays up-to-date with
                the latest technologies, and meets your evolving needs.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingFour">
              <h2 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  How do I get a quote or estimate for a project?
                </button>
              </h2>
            </div>

            <div
              id="collapseFour"
              className="collapse"
              aria-labelledby="headingFour"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                To receive a detailed quote tailored to your project needs,
                simply fill out our inquiry form. Our team will meticulously
                assess your requirements and provide a comprehensive quote based
                on your specific needs and preferences.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingFive">
              <h2 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Do you provide ongoing support and maintenance after the
                  project is completed?
                </button>
              </h2>
            </div>

            <div
              id="collapseFive"
              className="collapse "
              aria-labelledby="headingFive"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                Yes, our commitment extends beyond project completion. We offer
                post-project support and maintenance services to ensure your
                website or application functions smoothly, stays up-to-date with
                the latest technologies, and meets your evolving needs.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
