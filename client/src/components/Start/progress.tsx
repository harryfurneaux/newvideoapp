import { useEffect } from "react";
import Icons from "../icons";
//@ts-ignore
import { Flip } from "react-awesome-reveal"

interface BekeyProgressbarOptions {
  animate: boolean;
  animateText: boolean;
}

declare global {
  interface JQuery {
    bekeyProgressbar(options?: BekeyProgressbarOptions): void;
  }
}

const ProgressForm = ({ setScreen, jobViewContext, recorded, setRecorded }: { setScreen: any, jobViewContext: any, recorded: any, setRecorded: any }) => {

  function calculateProgress(max: number, current: number) {
    current = Math.min(Math.max(current, 1), max);
    const progress = (current / max) * 100;
    return Math.floor(progress);
  }

  useEffect(() => {
    (function ($) {
      $.fn.bekeyProgressbar = function (options: BekeyProgressbarOptions = {
        animate: true,
        animateText: true
      }): void {
        const $this = $(this);

        const $progressBar = $this;
        const $progressCount = $progressBar.find('.ProgressBar-percentage--count');
        const $circle = $progressBar.find('.ProgressBar-circle');
        const percentageProgress = parseInt($progressBar.attr('data-progress') || '0', 10);
        const percentageRemaining = 100 - percentageProgress;
        const percentageText = parseInt($progressBar.attr('data-progress') || '0', 10);

        const radius = parseInt($circle.attr('r') || '0', 10);
        const diameter = radius * 2;
        const circumference = Math.round(Math.PI * diameter);

        const percentage = (circumference * percentageRemaining) / 100;

        $circle.css({
          'stroke-dasharray': circumference,
          'stroke-dashoffset': percentage
        });

        if (options.animate === true) {
          $circle.css({
            'stroke-dashoffset': circumference
          }).animate({
            'stroke-dashoffset': percentage
          }, 3000);
        }

        if (options.animateText === true) {
          $({ Counter: 0 })
            .animate({
              Counter: percentageText
            }, {
              duration: 3000,
              step: function () {
                $progressCount.html(`
                  ${Math.ceil(this.Counter) + '%'}
                  <h6>${recorded?.length || 1} OF ${jobViewContext?.questions?.length || 3}</h6>
                `);
              }
            });
        } else {
          $progressCount.text(percentageText + '%');
        }
      };
    })(jQuery);

    $(document).ready(function () {
      $('.ProgressBar--animateAll').bekeyProgressbar();
    });
  }, [])

  return (
    <Flip direction="horizontal">
      <div className="kjjfds-janwkea knlsdj0wjew hover-anim" style={{ cursor: 'pointer', height: 523, width: 326 }}>
        {/* <video className="bg-video" src={"/assets/blue_bg.mp4"} autoPlay loop muted></video> */}
        <div className='wave-box'>
          <div className='wave'></div>
        </div>
        <div className="kjdslfk-sjadnkwe mb-5">

          <div className="ProgressBar ProgressBar--animateAll" data-progress={calculateProgress(jobViewContext?.questions?.length || 3, recorded?.length || 1)}>
            <svg className="ProgressBar-contentCircle">
              <circle transform="rotate(-77, 90, 90)" className="ProgressBar-background" cx="90" cy="90" r="77" />
              <circle transform="rotate(-77, 90, 90)" className="ProgressBar-circle" cx="90" cy="90" r="77" />
            </svg>
            <span className="ProgressBar-percentage ProgressBar-percentage--count" style={{ paddingLeft: 10 }}></span>
            <div className="knl-masdkw" style={{ marginLeft: -132, marginTop: 5 }}>
              <Icons iconNumber={23} />
            </div>
          </div>

        </div>
        <div className="ldjkfsa-jwme" style={{ width: 280 }}>
          <div className="d-flex justify-content-center">
            <Icons iconNumber={22} />
            <h5>Awesome!</h5>
          </div>
          <div className="kdjsa-ajwnkelds afkfjnkas-edsm mb-2">
            <div className="continueBtnDiv snasdj-sawdne">
              <button className="btn" onClick={() => {
                setScreen(0)
              }}>
                CONTINUE
                <div className="kdksa-ajwmd ">
                  <Icons iconNumber={7} />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="ldkjfal0-fdsnfe">
          <Icons iconNumber={64} />
        </div>
      </div>
    </Flip>
  );
};

export default ProgressForm;