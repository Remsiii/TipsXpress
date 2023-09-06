"use client"

import { useRef, React } from 'react'
import { signIn, signOut } from "next-auth/react";
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
      enabled: true,
      offsetX: 23,
      formatter: function (val) {
        return val + '%';
      }
    },
    tooltip: {
      enabled: false,
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
      categories: ["Aug", "Juli", "Juni", "Mai", "Apr"],
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
              color: '#808080',
              background: '#808080',
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

        <div style={{ fontFamily: "Josefin Sans", margin: "0 30px 30px" }} className='text-lg text-gray-300 sm:text-xl max-w-2xl text-center font-bold'>PetaBet ist die stärkste Wettorganisation auf dem Österreichischen Markt! Wir beschäftigen uns mit dem Verkauf von professionellen Spielanalysen.

          <br></br><br></br>Du kannst den Verlauf der Spiele verfolgen oder einfach darauf warten, dass wir die Ergebnisse auf unserer Seite angezeigt wird. Ab dann gehst einfach los und holst dir das Geld!

          <br></br>Für mehr Informationen über eine Mitgliedschaft, schreib uns eine Direktnachricht auf dem Instagram-Profil  <strong><a href="https://www.instagram.com/petabet24/" style={{ color: '#c71d1c' }}>@PetaBet_Tips</a></strong>
        </div>

      </section>




      <div className="w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 opacity-[.98] mt-10">
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