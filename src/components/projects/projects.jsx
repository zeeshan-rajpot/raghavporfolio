import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PortfolioData from "../portfolio/portfolioData";
import Modal from "../portfolio/modal/Modal";

const Projects = () => {
  const [getModal, setGetModal] = useState(false);
  const [modalId, setModalId] = useState(1);

  const handleModal = (id) => {
    setGetModal(true);
    setModalId(id);
  };

  const closeModal = () => {
    setGetModal(false);
  };

  return (
    <>
       <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter((item) =>
                  item.tag.includes("mockup")
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
                     
                    </div>
                  );
                })}
              </div>
            </TabPanel>

      {/* Modal component rendered conditionally */}
 {getModal && <Modal modalId={modalId} setGetModal={setGetModal} />}
    </>
  );
};

export default Projects;
