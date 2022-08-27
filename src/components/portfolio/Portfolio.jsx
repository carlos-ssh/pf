/* eslint-disable */
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PortfolioData from "./portfolioData";
import Modal from "./modal/Modal";

const Portfolio = () => {
  const [getModal, setGetModal] = useState(false);
  const [modalId, setModalId] = useState(1);

  const handleModal = (id) => {
    setGetModal(true);
    setModalId(id);
  };

  return (
    <>
      <div className="portfolio-main">
        {/* All */}
        <Tabs>
          <TabList className="portfolio-tab-list" data-aos="fade-up">
            <Tab>ALL</Tab>
            <Tab>REACT</Tab>
            <Tab>RUBY ON RAILS</Tab>
            <Tab>HTML, CSS & JS</Tab>
            <Tab>WORDPRESS</Tab>
            <Tab>COMMAND CONSOLE APPS</Tab>
          </TabList>

          <div className="container">

            {/* All */}
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.map((item) => {
                  const { id, type, image, delayAnimation } = item;

                  return (
                    <div
                      key={id}
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className="tab-content"
                        onClick={() => handleModal(id)}
                      >
                        <img src={image} alt="portfolio project1" />
                        <h3>
                          <span className="conent-title">{type}</span>
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabPanel>

            {/* React */}
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter((item) => item.tag.includes("react")).map(
                  (item) => {
                    const { id, type, image, delayAnimation } = item;
                    return (
                      <div
                        key={id}
                        data-aos="fade-right"
                        data-aos-delay={delayAnimation}
                      >
                        <div
                          className="tab-content"
                          onClick={() => handleModal(id)}
                        >
                          <img src={image} alt="portfolio project demo" />
                          <h3>
                            <span className="conent-title">{type}</span>
                          </h3>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </TabPanel>

            {/* Ruby on Rails */}
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter((item) => item.tag.includes("rubyonrails")).map(
                  (item) => {
                    const { id, type, image, delayAnimation } = item;
                    return (
                      <div
                        key={id}
                        data-aos="fade-right"
                        data-aos-delay={delayAnimation}
                      >
                        <div
                          className="tab-content"
                          onClick={() => handleModal(id)}
                        >
                          <img src={image} alt="portfolio project demo" />
                          <h3>
                            <span className="conent-title">{type}</span>
                          </h3>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </TabPanel>

            {/* HTML, CSS & JS */}
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter((item) => item.tag.includes("html")).map(
                  (item) => {
                    const { id, type, image, delayAnimation } = item;
                    return (
                      <div
                        key={id}
                        data-aos="fade-right"
                        data-aos-delay={delayAnimation}
                      >
                        <div
                          className="tab-content"
                          onClick={() => handleModal(id)}
                        >
                          <img src={image} alt="portfolio project demo" />
                          <h3>
                            <span className="conent-title">{type}</span>
                          </h3>
                        </div>
                        {/* {getModal && <Modal props={modalId} />} */}
                      </div>
                    );
                  }
                )}
              </div>
            </TabPanel>

            {/* Wordpress */}
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter((item) =>
                  item.tag.includes("wordpress")
                  ).map((item) => {
                    const { id, type, image, delayAnimation } = item;
                    return (
                      <div
                      key={id}
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className="tab-content"
                        onClick={() => handleModal(id)}
                      >
                        <img src={image} alt="portfolio project demo" />
                        <h3>
                          <span className="conent-title">{type}</span>
                        </h3>
                      </div>
                      {/* {getModal && <Modal props={modalId} />} */}
                    </div>
                  );
                })}
              </div>
            </TabPanel>

            {/* Command Console Apps */}
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter((item) =>
                  item.tag.includes("bash")
                ).map((item) => {
                  const { id, type, image, delayAnimation } = item;
                  return (
                    <div
                      key={id}
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className="tab-content"
                        onClick={() => handleModal(id)}
                      >
                        <img src={image} alt="portfolio project demo" />
                        <h3>
                          <span className="conent-title">{type}</span>
                        </h3>
                      </div>
                      {/* {getModal && <Modal props={modalId} />} */}
                    </div>
                  );
                })}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
      {getModal && <Modal modalId={modalId} setGetModal={setGetModal} />}{" "}
    </>
  );
};

export default Portfolio;
