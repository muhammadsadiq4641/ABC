import React from "react";

const Introduction = () => {
  return (
    <div className="container mx-auto">
      <div>
        <div className="flex items-center relative  justify-between">
          <img
            className="xl:w-[135px] sm:w-[100px] absolute left-0 w-[60px]"
            src="/assets/intro-img-l.png"
          />
          <h1 className="text-[#504F4F] 2xl:text-[80px] lg:text-6xl sm:text-4xl text-2xl w-full text-center  font-normal font-Urbanist">
            Introduction to <span className="text-[#5299EC]">Sigma33</span>
          </h1>
          <img
            className="xl:w-[135px] sm:w-[100px] absolute right-0 w-[60px]"
            src="/assets/intro-img-r.png"
          />
        </div>
        {/* asd */}
        <div className="flex mt-10 lg:flex-row flex-col 2xl:gap-10 items-center justify-between">
          <div>
            <img className="2xl:w-[626px]" src="./assets/intro-sigma-img.png" />
          </div>
          <div className="flex-1">
            <p className="text-[#504F4F] lg:text-start text-center sm:text-2xl text-base font-light sm:leading-10">
              Sigma 33 ($S33)is an avant-garde financial protocol set to
              reintroduce the world of passive income within the cryptocurrency
              sphere. It represents a Defi paradigm that harnesses high APY
              staking rewards for liquidity providers, while concurrently
              offering comparatively lower APY rewards for S33 token holders.
            </p>
          </div>
        </div>

        {/* heart */}

        <div className="flex mt-10 lg:flex-row-reverse flex-col 2xl:gap-10 items-center justify-between">
          <div>
            <img
              className="2xl:w-[546px] lg:mb-0 mb-10"
              src="./assets/intro-second-img.png"
            />
          </div>
          <div className="flex-1">
            <p className="text-[#504F4F] lg:text-start text-center sm:text-2xl text-base font-light sm:leading-10">
              At the heart of Sigma 33 lies a total token supply of 2 billion,
              with an initial liquidity injection of 100 million S33 tokens
              paired with 10 Ethereum by the project's dedicated team. This
              robust liquidity foundation was strategically established to
              ensure the protocol's resilience.
            </p>
          </div>
        </div>

        {/* inpiration  */}

        <div className="flex mt-5 lg:flex-row flex-col 2xl:gap-10 items-center justify-between">
          <div>
            <img
              className="2xl:w-[546px] lg:mb-0 mb-10"
              src="./assets/intro-third-img.png"
            />
          </div>
          <div className="flex-1">
            <p className="text-[#504F4F] lg:text-start text-center sm:text-2xl text-base font-light sm:leading-10">
              The inspiration behind Sigma 33 draws from the notable Olympus DAO
              V1 (OHM) protocol, which has been refined and enhanced to make it
              more attractive to investors. Notably, Sigma 33 incorporates a 2%
              transaction tax, imposed on each buy and sell. The Ethereum
              collected from these transaction taxes is deposited into a
              treasury wallet alongside 50 million S33 tokens.
            </p>
          </div>
        </div>

        {/* inpiration  */}

        <div className="flex mt-5 lg:flex-row-reverse flex-col 2xl:gap-10 items-center justify-between">
          <div>
            <img
              className="2xl:w-[626px] lg:mb-0 mb-10"
              src="./assets/intro-fourth-img.png"
            />
          </div>
          <div className="flex-1">
            <p className="text-[#504F4F] lg:text-start text-center sm:text-2xl text-base font-light sm:leading-10">
              The roadmap for Sigma 33's future development is equally
              intriguing. It includes SS33LP staking for Ethereum rewards, the
              introduction of Reserve Bonds and Inverse Bonds to stabilize S33
              prices, and a transition towards a decentralized autonomous
              organization (DAO) structure as the project's community matures.
              The end goal is to relinquish control to the community, enabling
              them to govern the protocol autonomously.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
