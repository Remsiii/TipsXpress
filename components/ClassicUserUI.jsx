"use client"

import { useRef, React } from 'react'
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });
import useAuthModal from "@hooks/useAuthModal";

const ClassicUserUI = () => {

  const chartRef = useRef(null);
  const authModal = useAuthModal();

  const options = {
    series: [
      {
        name: "User",
        color: "#31C48D",
        data: ["80", "71", "77", "86", "75"],
      },
    ],
    chart: {
      sparkline: {
        enabled: false,
      },
      type: "bar",
      width: "100%",
      height: 400,
      toolbar: {
        show: false,
      }
    },
    fill: {
      opacity: 1,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: "100%",
        borderRadiusApplication: "end",
        borderRadius: 6,
        dataLabels: {
          position: "top",
        },
      },
    },
    legend: {
      show: true,
      position: "bottom",
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      shared: true,
      intersect: false,
      formatter: function (value) {
        return value + "%"
      }
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
        },
        formatter: function (value) {
          return value + "%"
        }
      },
      categories: ["Apr", "Mai", "Juni", "Juli", "Aug"],
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
        }
      }
    },
    grid: {
      show: true,
      strokeDashArray: 3,
      padding: {
        left: 4,
        right: 2,
        top: -20
      },
    },
    annotations: {
      xaxis: [
        {
          x: 'Mai',
          borderColor: '#00E396',
          label: {
            borderColor: '#00E396',
            style: {
              color: '#fff',
              background: '#00E396',
            },
            text: 'Dein Text hier',
          },
        },
      ],
    },
    fill: {
      opacity: 1,
    }
  }


  return (
    <>

      <section className='w-full flex-center flex-col'>

        <h1 className='head_text text-center'>
          Win Big with Expert Tips
          <br />
          <span className='orange_gradient text-center'>PetaBet</span>
        </h1>
        <p className='mt-5 text-lg text-gray-300 sm:text-xl max-w-2xl text-center'>
          Hol dir die besten Fußball-Wetttipps und erhöhe dir die Gewinnchancen. Meld dich jetzt an!
        </p>

        {/* {!session?.user ? (
        <div> */}
        {/* {providers &&
            Object.values(providers).map((provider) => (
              <a
                type='button'
                className="buttonSubscribe"
                key={provider.name}
                onClick={() => {
                  router.push('/login');
                }}
              >
                Sign in
              </a>
            ))}
        </div>
      ) : ( */}

              <a
                type='button'
                className="buttonSubscribe"
                onClick={authModal.onOpen}
              >
                Sign in
              </a>

        <br></br>
        <br></br>
        <br></br>

      </section>

      <div className="w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 opacity-[.98]">
        <div className="flex justify-between border-gray-200 border-b dark:border-gray-700 pb-3">
          <dl>
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Current Users</dt>
            <dd className="leading-none text-3xl font-bold text-gray-900 dark:text-white">23<span style={{ fontSize: '1rem' }}>+</span></dd>
          </dl>
          <div>
            <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
              User subscribed last month: 23.5%
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 py-3 text-xl">
          <dl>
            Erfolge der letzten Monate
          </dl>
        </div>


        <div ref={chartRef}>
          <ApexCharts options={options} series={options.series} type="bar" />
        </div>

      </div>
    </>
  )
}

export default ClassicUserUI