import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../public/images/loan-connect-logo.png";
import GirlsImage from "../../../public/images/landing-page-image.png";
import JamesAndSonsLogo from "../../../public/images/james-and-sons.png";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const stats = [
  { id: 1, name: "Transactions every 24 hours", value: "44 million" },
  { id: 2, name: "Assets under holding", value: "$119 trillion" },
  { id: 3, name: "New users annually", value: "46,000" },
];

export default function LandingPage() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isLoggedIn
  );

  return (
    <div className="">
      <section className="container mx-auto flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl text-center font-extrabold mb-8 leading-tight">
          Lendmate <br />{" "}
          <p className="text-3xl">Peer-to-Peer Lending Made Easy</p>
          <img
            className="mx-auto h-20 mt-6 w-auto"
            src={Logo}
            alt="Lendmate logo"
          />
        </h1>
        <p className="text-xl text-center mb-12">
          Welcome to our platform that connects borrowers and lenders through
          peer-to-peer lending. With our innovative P2P lending model, you can
          borrow or invest funds directly with individuals, bypassing
          traditional financial institutions.
        </p>
        <div className="flex justify-center mb-10">
          {!isAuthenticated && (
            <>
              <Link to="/register">
                <button className="bg-green-500 text-white hover:bg-white hover:text-gray-800 font-bold py-3 px-6 rounded-lg mr-4">
                  Get started!
                </button>
              </Link>
              <Link to="login">
                <button className="bg-gray-800 50border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-gray-800">
                  Log into your account
                </button>
              </Link>
            </>
          )}
        </div>
      </section>
      <section className="bg-white text-gray-800 py-8 rounded-lg flex:col lg:flex">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Why do you need it?</h2>

          <p className="text-lg mb-8">
            Whether you need a personal loan for a major purchase or want to
            earn attractive returns by lending money to others, our P2P lending
            platform offers a secure and transparent way to fulfill your
            financial goals.
          </p>
          <h2 className="text-2xl font-bold mb-4">How It Works?</h2>
          <p className="text-lg mb-8">
            Borrowers can create loan listings outlining their borrowing needs,
            and investors can browse and choose loan listings to fund. The
            platform facilitates the loan process, including credit checks, loan
            documentation, and repayment management.
          </p>
          <p className="text-lg">
            Our platform also provides tools for lenders to diversify their
            investments, assess borrower creditworthiness, and track their
            portfolio performance. We prioritize security and ensure that all
            transactions and personal data are protected with robust encryption
            and privacy measures.
          </p>
        </div>
        <div className="container mx-auto px-4 flex">
          <img
            className="mx-auto object-cover w-auto"
            src={GirlsImage}
            alt="girls with money"
          />
        </div>
      </section>
      <section className="bg-inherit py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 rounded-lg">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img
            className="mx-auto h-20"
            src={JamesAndSonsLogo}
            alt="business image"
          />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                &quot;From the moment I discovered Lendmate, my financial
                journey has been transformed. The platform provided me with easy
                access to loans at competitive rates, and the process was
                seamless. The support team was responsive and helpful,
                addressing all my queries promptly. Thanks to Lendmate, I was
                able to achieve my financial goals faster than I ever imagined.
                I highly recommend their services to anyone looking for a
                hassle-free lending experience.&quot;
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-10 w-10 rounded-full"
                src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/518.jpg"
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">
                  Julian Schneider
                </div>
                <svg
                  viewBox="0 0 2 2"
                  width={3}
                  height={3}
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">CEO of James and Sons</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}
