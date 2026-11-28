import React, { useState } from "react";
import { Calendar, ArrowRight, ArrowLeft, User } from "lucide-react";
import { useLanguage } from "../components/LanguageProvider";
import SEO from "../components/SEO";

export default function Blogs() {
  const { language } = useLanguage();
  const ta = language === "ta";
  const t = (en, tamil) => (ta ? tamil : en);

  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 5,
      titleEn: "Knees Ache on Stairs With No Injury? How Low Vitamin D Plays a Role",
      titleTa: "காயம் இல்லாமலேயே படிக்கட்டுகளில் முழங்கால் வலிக்கிறதா? வைட்டமின் D குறைபாடு காரணமாக இருக்கலாம்",
      excerptEn:
        "Even without a knee injury, low vitamin D can weaken thigh muscles and make knee bones tender under 3× to 4× stair load. Learn how to tell the difference and what steps to take.",
      excerptTa:
        "முழங்கால் காயம் இல்லாவிட்டாலும், வைட்டமின் D குறைபாடு தொடை தசைகளை பலவீனப்படுத்தி படிக்கட்டுகளில் ஏறும்போது வலியை ஏற்படுத்தும். இதற்கான அறிகுறிகள் மற்றும் தீர்வுகளை அறியுங்கள்.",
      date: "November 29, 2026",
      categoryEn: "Orthopedic & Nutrition",
      categoryTa: "எலும்பியல் மற்றும் ஊட்டச்சத்து",
      image:
        "https://drive.google.com/thumbnail?id=1eAt71tGNVcrL2Mm5EDMsn9v5T8rmjaYR&sz=w1000",
      contentEn: `
        <div style="color: #1f2937; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.7; margin: 0px auto; max-width: 760px;">

          <p style="color: #6b7280; font-size: 14px; margin-bottom: 16px;">
            ⏱️ <strong>3 Min Read</strong> &nbsp;•&nbsp; 🩺 <em>General information, not medical advice</em>
          </p>

          <div style="align-items: stretch; background: linear-gradient(135deg, rgb(15, 23, 42) 0%, rgb(30, 58, 138) 100%); border-radius: 14px; box-shadow: rgba(15, 23, 42, 0.15) 0px 8px 20px; display: flex; flex-wrap: wrap; margin-bottom: 24px; overflow: hidden;">
            
            <div style="flex: 1 1 280px; max-height: 250px; min-height: 200px; overflow: hidden; position: relative;">
              <img alt="Low vitamin D knee pain when climbing stairs" src="https://drive.google.com/thumbnail?id=1eAt71tGNVcrL2Mm5EDMsn9v5T8rmjaYR&amp;sz=w1000" style="display: block; height: 100%; object-fit: cover; width: 100%;" />
            </div>

            <div style="color: white; display: flex; flex-direction: column; flex: 1 1 320px; justify-content: center; padding: 22px 24px;">
              <span style="align-self: flex-start; background-color: #f59e0b; border-radius: 20px; color: #111827; display: inline-block; font-size: 11px; font-weight: 800; letter-spacing: 0.8px; margin-bottom: 10px; padding: 4px 10px; text-transform: uppercase;">
                ☀️ Orthopedic &amp; Nutrition Guide
              </span>
              <h2 style="color: white; font-size: 21px; font-weight: 700; line-height: 1.3; margin: 0px 0px 8px;">
                Knees Ache on Stairs With No Injury?
              </h2>
              <p style="color: #cbd5e1; font-size: 14px; line-height: 1.5; margin: 0px;">
                How low <strong style="color: #fde047;">Vitamin D</strong> weakens thigh muscles &amp; knee bones under 3×–4× stair load.
              </p>
            </div>

          </div>

          <div style="background-color: #f0f9ff; border-left: 5px solid rgb(2, 132, 199); border-radius: 8px; margin-bottom: 24px; padding: 18px 20px;">
            <h3 style="color: #0369a1; font-size: 18px; font-weight: 700; margin-bottom: 10px; margin-top: 0px;">In Short: Vitamin D &amp; Stair Knee Pain</h3>
            <ul style="list-style-type: disc; margin: 0px; padding-left: 20px;">
              <li style="margin-bottom: 8px;"><strong>🦴 The Link:</strong> Low vitamin D weakens muscles and bones by affecting calcium absorption.</li>
              <li style="margin-bottom: 8px;"><strong>⚖️ Why Stairs Hurt:</strong> Stairs put up to 3–4 times your body weight across the knee, exposing weak thigh muscles.</li>
              <li style="margin-bottom: 0px;"><strong>🩺 Simple Check:</strong> A routine vitamin D blood test confirms if your level is below 20 ng/mL.</li>
            </ul>
          </div>

          <div style="margin-bottom: 28px; padding: 20px 22px;">
            Even if you haven't hurt your knee, <span style="background: rgb(254, 240, 138); border-radius: 4px; font-weight: 600; padding: 2px 6px;">low vitamin D may cause knee pain when climbing stairs.</span> The primary mechanism of action is to weaken muscles and bones, although this is only one of the causes. When cartilage wears or when your tendons become strained, the pain is likely to be sharper and more mechanical, and when your vitamin D is low, you'll feel a <strong>dull, heavy, aching pain</strong> in your thighs and knees when you climb or step off.
          </div>

          <div style="background: linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(241, 245, 249) 100%); border-radius: 14px; border: 1px solid rgb(203, 213, 225); margin: 24px 0px; padding: 22px;">
            <div style="color: #64748b; font-size: 13px; font-weight: 700; letter-spacing: 0.7px; margin-bottom: 14px; text-transform: uppercase;">📊 Knee Joint Pressure Comparison</div>
            
            <div style="margin-bottom: 14px;">
              <div style="display: flex; font-size: 14px; font-weight: 600; justify-content: space-between; margin-bottom: 6px;">
                <span style="color: #0f172a;">🚶 Walking on Level Ground</span>
                <span style="color: #059669;">~1.5× Body Weight</span>
              </div>
              <div style="background: rgb(226, 232, 240); border-radius: 99px; height: 10px; overflow: hidden; width: 100%;">
                <div style="background: rgb(16, 185, 129); border-radius: 99px; height: 100%; width: 38%;"></div>
              </div>
            </div>

            <div>
              <div style="display: flex; font-size: 14px; font-weight: 600; justify-content: space-between; margin-bottom: 6px;">
                <span style="color: #0f172a;">🪜 Climbing or Stepping Down Stairs</span>
                <span style="color: #dc2626;">3× to 4× Body Weight</span>
              </div>
              <div style="background: rgb(254, 226, 226); border-radius: 99px; height: 10px; overflow: hidden; width: 100%;">
                <div style="background: linear-gradient(90deg, rgb(245, 158, 11), rgb(220, 38, 38)); border-radius: 99px; height: 100%; width: 92%;"></div>
              </div>
            </div>
          </div>

          <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 24px;">
            <li style="margin-bottom: 10px;"><strong>Your thigh muscles get easily tired:</strong> The front of your thigh (quadriceps) is used like a brake during the down step. Vitamin D helps strengthen muscles; during vitamin D deficiency, the kneecap is placed under additional stress.</li>
            <li style="margin-bottom: 10px;"><strong>Your knee bone may become tender:</strong> Vitamin D is a factor in calcium absorption for bones. If it's low, bones may begin to ache under the weight of the body.</li>
          </ul>

          <h2 style="color: #0f172a; font-size: 22px; font-weight: 700; margin-bottom: 14px; margin-top: 30px;">Is It Low Vitamin D or a Mechanical Knee Problem?</h2>

          <div style="margin-bottom: 14px; overflow-x: auto;">
            <table style="border-collapse: collapse; border: 1px solid rgb(229, 231, 235); font-size: 15px; width: 100%;">
              <thead>
                <tr style="background-color: #1e3a8a; color: white; text-align: left;">
                  <th style="border: 1px solid rgb(229, 231, 235); padding: 12px;">Clue</th>
                  <th style="border: 1px solid rgb(229, 231, 235); padding: 12px;">Low Vitamin D</th>
                  <th style="border: 1px solid rgb(229, 231, 235); padding: 12px;">Mechanical Knee Problem</th>
                </tr>
              </thead>
              <tbody>
                <tr style="background-color: white;">
                  <td style="border: 1px solid rgb(229, 231, 235); font-weight: bold; padding: 12px;">How it feels</td>
                  <td style="border: 1px solid rgb(229, 231, 235); padding: 12px;">Dull, heavy, aching pain in thighs and knees</td>
                  <td style="border: 1px solid rgb(229, 231, 235); padding: 12px;">Sharper and more mechanical pain</td>
                </tr>
                <tr style="background-color: #f9fafb;">
                  <td style="border: 1px solid rgb(229, 231, 235); font-weight: bold; padding: 12px;">Cause</td>
                  <td style="border: 1px solid rgb(229, 231, 235); padding: 12px;">Weakened muscles and tender bone</td>
                  <td style="border: 1px solid rgb(229, 231, 235); padding: 12px;">Cartilage wear or strained tendons</td>
                </tr>
                <tr style="background-color: white;">
                  <td style="border: 1px solid rgb(229, 231, 235); font-weight: bold; padding: 12px;">Other signs</td>
                  <td style="border: 1px solid rgb(229, 231, 235); padding: 12px;">Heavy, tired leg on stairs</td>
                  <td style="border: 1px solid rgb(229, 231, 235); padding: 12px;">Swelling, locking, or knee giving way</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style="margin-bottom: 24px;">There are other symptoms which overlap, many people may have both problems at once, and only a check can determine which is it, as it is a dull, deep ache or heavy, tired leg.</p>

          <h2 style="color: #111827; font-size: 22px; font-weight: 700; margin-bottom: 12px; margin-top: 28px;">If you think you may have low levels of vitamin D, do these 3 steps.</h2>

          <div style="background-color: #f8fafc; border-radius: 10px; border: 1px solid rgb(226, 232, 240); margin-bottom: 24px; padding: 18px;">
            <p style="margin-bottom: 12px; margin-top: 0px;"><strong>1. Have a blood test:</strong> Don't guess, ask for a vitamin D test from a laboratory. On your own report look at the range. The level of &lt;20 ng/mL is considered deficient in many labs.</p>
            <p style="margin-bottom: 12px; margin-top: 0px;"><strong>2. Take a calcium supplement if prescribed:</strong> If a weekly vitamin D3 capsule/sachet is prescribed, it is typically taken with a meal, but as directed by your doctor. Do not take supplements without advice as too much is harmful.</p>
            <p style="margin: 0px;"><strong>3. Combine nutrition with mild exercise:</strong> As your levels begin to improve, walking without running and leg raises while sitting will help rebuild strength in the thighs without straining the kneecap.</p>
          </div>

          <div style="background-color: #fffbeb; border-left: 5px solid rgb(245, 158, 11); border-radius: 8px; margin-bottom: 24px; padding: 18px 20px;">
            <h3 style="color: #b45309; font-size: 18px; font-weight: 700; margin-bottom: 10px; margin-top: 0px;">⚠️ When to See an Orthopedic Doctor</h3>
            <p style="margin-bottom: 8px; margin-top: 0px;">If you have: Get your knee checked:</p>
            <ul style="list-style-type: disc; margin: 0px 0px 10px; padding-left: 20px;">
              <li>A pain that persists for more than a couple of weeks</li>
              <li>Swelling, locking or a feeling that your knee gives way</li>
              <li>Night pain that awakens you from sleep.</li>
              <li>Discomfort that restricts your ability to do everyday tasks.</li>
            </ul>
            <p style="color: #78350f; font-size: 14px; margin: 0px;">A blood test or an X-ray (if necessary) may help determine if it is from vitamin D deficiency, the joint, or both.</p>
          </div>

          <p style="border-top: 1px solid rgb(229, 231, 235); color: #4b5563; font-size: 14px; padding-top: 14px;">
            The knee is frequently the site of pain, especially during the latter part of an individual's life. Pain in the knee is a common complaint and often occurs towards the end of life.
          </p>

          <p style="background-color: #f3f4f6; border-radius: 6px; color: #6b7280; font-size: 12px; margin-top: 16px; padding: 12px;">
            <strong>Medical Disclaimer:</strong> This is an awareness guide and should not replace a clinical medical evaluation, diagnosis or treatment. Please always ask an expert orthopaedic doctor before beginning supplements.
          </p>

        </div>
      `
    },
    {
      id: 4,
      titleEn: "Why Does Your Knee Hurt Going Down Stairs? Causes & Relief Tips",
      titleTa: "படிக்கட்டுகளில் இறங்கும்போது முழங்கால் வலி ஏற்படுவது ஏன்?",
      excerptEn:
        "Walking on flat ground feels fine, but going downstairs triggers sharp pain behind your kneecap. Learn the mechanical causes, the smart stair rule, and when to see a doctor.",
      excerptTa:
        "சமதளத்தில் நடக்கும்போது வலி இல்லாமல், படிக்கட்டுகளில் இறங்கும்போது மட்டும் முழங்கால் வலி ஏற்படுவதற்கான காரணங்கள் மற்றும் தீர்வுகளை அறியுங்கள்.",
      date: "November 28, 2026",
      categoryEn: "Knee Care",
      categoryTa: "முழங்கால் பராமரிப்பு",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSti-yMC9QmyxxHBtlLnuQ_oM4tq9vItX75Sr3QbTmvFa25toMDZqEFce5mEgq9iLYTuhSOjs2W8rbrNr8BSmycLZhzUfy8FLPScygTTPZ7OLR21I3hC1GVYlIIswWxOk4k_VQxf2zGme2S6Wq4RJxd_8k9suGo8j2zaZVoSgHyWBy4oYVf1EStb3SPb0/s2752/Gemini_Generated_Image_1am371am371am371.png",
      contentEn: `
        <div class="separator" style="clear: both; text-align: center;">
          <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSti-yMC9QmyxxHBtlLnuQ_oM4tq9vItX75Sr3QbTmvFa25toMDZqEFce5mEgq9iLYTuhSOjs2W8rbrNr8BSmycLZhzUfy8FLPScygTTPZ7OLR21I3hC1GVYlIIswWxOk4k_VQxf2zGme2S6Wq4RJxd_8k9suGo8j2zaZVoSgHyWBy4oYVf1EStb3SPb0/s2752/Gemini_Generated_Image_1am371am371am371.png" target="_blank" rel="noopener noreferrer">
            <img border="0" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSti-yMC9QmyxxHBtlLnuQ_oM4tq9vItX75Sr3QbTmvFa25toMDZqEFce5mEgq9iLYTuhSOjs2W8rbrNr8BSmycLZhzUfy8FLPScygTTPZ7OLR21I3hC1GVYlIIswWxOk4k_VQxf2zGme2S6Wq4RJxd_8k9suGo8j2zaZVoSgHyWBy4oYVf1EStb3SPb0/s2752/Gemini_Generated_Image_1am371am371am371.png" style="width: 100%; max-height: 420px; object-fit: cover; border-radius: 14px;" />
          </a>
        </div>

        <p style="color: #64748b; font-size: 13px; margin-top: 12px; text-align: center;">
          ⏱️ <em>3 Min Read</em> &nbsp;•&nbsp; 🩺 <em>General information, not medical advice</em>
        </p>

        <div style="background: linear-gradient(135deg, rgb(240, 249, 255) 0%, rgb(240, 253, 244) 100%); border-radius: 10px; border: 1px solid rgb(186, 230, 253); font-family: sans-serif; margin: 22px 0px; padding: 18px 20px;">
          <strong style="color: #0f172a; display: block; font-size: 16px; margin-bottom: 12px;">In Short: Why Your Knee Hurts on Stairs</strong>
          <div style="color: #1e293b; font-size: 14.5px; line-height: 1.5; margin-bottom: 10px;">
            ⚖️ <strong>Heavy Load:</strong> each step down puts 3 to 4x your body weight behind your kneecap.
          </div>
          <div style="color: #1e293b; font-size: 14.5px; line-height: 1.5; margin-bottom: 10px;">
            🪜 <strong>Smart Stair Rule:</strong> up with the good leg, down with the painful one, so your healthy leg takes the weight.
          </div>
          <div style="color: #1e293b; font-size: 14.5px; line-height: 1.5;">
            🏥 <strong>Don't Ignore Signs:</strong> swelling, locking, or night pain means get it checked.
          </div>
        </div>

        <p style="margin-bottom: 16px; line-height: 1.75; color: #334155;">Walking on flat ground feels fine, but the moment you head downstairs, your knee flares up with a sharp pain or a grinding crunch behind the kneecap. You’re not alone, and there’s a clear reason it happens.</p>
        
        <p style="margin-bottom: 20px; line-height: 1.75; color: #334155;">Each step down sends roughly 3 to 4 times your body weight through the joint behind your kneecap. If the cartilage there is irritated or thinned, that load can feel rough and grinding.</p>

        <h2 style="font-size: 22px; font-weight: 700; color: #0f172a; margin-top: 28px; margin-bottom: 12px;">Why Does My Knee Hurt Going Down Stairs (and Not Just Up)?</h2>

        <p style="margin-bottom: 12px; line-height: 1.75; color: #334155;">It takes a good amount of effort to climb up the stairs, but your glutes and hamstrings get the bulk of the work done. Stepping down is a completely different mechanical load:</p>

        <ul style="list-style-type: disc; padding-left: 22px; margin-bottom: 24px; color: #334155; line-height: 1.75;">
          <li style="margin-bottom: 8px;"><strong>Your thighs act as shock absorbers:</strong> Your quads must tighten while lengthening to prevent you from falling too quickly.</li>
          <li style="margin-bottom: 8px;"><strong>The back of the kneecap is pressed against the thigh groove:</strong> This braking action causes the back of your kneecap to push directly against the groove on the front of your thigh bone.</li>
          <li>It causes immediate, sharp pain under that intense downward pressure—even if there is just slight swelling or rough cartilage inside.</li>
        </ul>

        <h2 style="font-size: 22px; font-weight: 700; color: #0f172a; margin-top: 28px; margin-bottom: 16px;">What Is the Cause of Your Knee Pain When Going Down Stairs?</h2>

        <div style="background: rgb(248, 250, 252); border-left: 4px solid rgb(2, 132, 199); border-radius: 0px 6px 6px 0px; margin-bottom: 14px; padding: 14px 18px;">
          <strong style="color: #0f172a; display: block; font-size: 15px; margin-bottom: 4px;">1. Chondromalacia Patellae (Runner's Knee)</strong>
          <span style="color: #334155; font-size: 14px; line-height: 1.6;">
            Irritation or softening of cartilage under your kneecap. Commonly observed when one sits continuously for long periods at a desk, while driving in heavy traffic, or when sitting with bent knees for hours ("Theatre Sign").
          </span>
        </div>

        <div style="background: rgb(248, 250, 252); border-left: 4px solid rgb(2, 132, 199); border-radius: 0px 6px 6px 0px; margin-bottom: 14px; padding: 14px 18px;">
          <strong style="color: #0f172a; display: block; font-size: 15px; margin-bottom: 4px;">2. Early Knee Osteoarthritis (Wear &amp; Tear)</strong>
          <span style="color: #334155; font-size: 14px; line-height: 1.6;">
            The cartilage of a joint thins over time. The early signs are typically a grinding or crunching sensation when going downstairs, and morning stiffness lasting less than 15–30 minutes.
          </span>
        </div>

        <div style="background: rgb(248, 250, 252); border-left: 4px solid rgb(2, 132, 199); border-radius: 0px 6px 6px 0px; margin-bottom: 14px; padding: 14px 18px;">
          <strong style="color: #0f172a; display: block; font-size: 15px; margin-bottom: 4px;">3. Patellar Tendon Strain</strong>
          <span style="color: #334155; font-size: 14px; line-height: 1.6;">
            Inflammation of the tendon that connects your kneecap to the shinbone—usually caused by doing high-impact steps, running over hard pavement, or suddenly beginning an intense leg workout.
          </span>
        </div>

        <div style="background: rgb(248, 250, 252); border-left: 4px solid rgb(2, 132, 199); border-radius: 0px 6px 6px 0px; margin-bottom: 24px; padding: 14px 18px;">
          <strong style="color: #0f172a; display: block; font-size: 15px; margin-bottom: 4px;">4. Meniscus Tear or Irritation</strong>
          <span style="color: #334155; font-size: 14px; line-height: 1.6;">
            A small tear or pinch in the shock-absorbing cartilage discs inside the joint that may lead to a catching sensation or feel like a little pebble is stuck in the joint when stepping down or turning.
          </span>
        </div>

        <h2 style="font-size: 22px; font-weight: 700; color: #0f172a; margin-top: 28px; margin-bottom: 12px;">How to Walk Down Stairs with Knee Pain &amp; Everyday Relief Tips</h2>

        <ul style="list-style-type: disc; padding-left: 22px; margin-bottom: 24px; color: #334155; line-height: 1.75;">
          <li style="margin-bottom: 8px;"><strong>Follow the physical therapy stair rule:</strong> <em>“Up with the good leg, down with the bad leg.”</em> When going down, step down with the hurt leg first. This prevents your sore knee from bending under extreme pressure, while your stronger knee remains on the top step to control the bend.</li>
          <li style="margin-bottom: 8px;"><strong>Change leg strengthening exercises:</strong> Deep squats and lunges are high-stress activities for an irritated kneecap. Switch to seated straight-leg raises, flat-ground walking, or a stationary bike with the seat positioned high.</li>
          <li style="margin-bottom: 8px;"><strong>Reconsider everyday shoes:</strong> Thin slip-on shoes or stiff formal shoes send all the impact of the heel right up to the knee. Replace them with soft, supportive shoes that have good arch support.</li>
          <li><strong>Use ice on the knee after a long day:</strong> If your knee becomes warm or aches at night, wrap an ice pack in a clean cotton towel and rest the pack on the knee for 15 minutes.</li>
        </ul>

        <h2 style="font-size: 22px; font-weight: 700; color: #0f172a; margin-top: 28px; margin-bottom: 12px;">When to Visit an Orthopaedic Doctor for Knee Pain</h2>

        <p style="margin-bottom: 12px; line-height: 1.75; color: #334155;">If you experience mild soreness that gets better with rest and proper footwear, it's likely temporary. However, make an appointment to see an orthopaedic specialist in person if you experience any of the following:</p>

        <ul style="list-style-type: disc; padding-left: 22px; margin-bottom: 24px; color: #334155; line-height: 1.75;">
          <li style="margin-bottom: 8px;">The knee is visibly swollen, warm, or red.</li>
          <li style="margin-bottom: 8px;">Your knee begins to wobble, locks, or suddenly "gives way."</li>
          <li>Knee pain lasts longer than 2 weeks or interferes with your night's rest.</li>
        </ul>

        <blockquote style="background-color: #f8fafc; border-left: 4px solid rgb(148, 163, 184); border-radius: 0px 6px 6px 0px; color: #475569; font-size: 13px; line-height: 1.6; margin: 20px 0px; padding: 12px 16px;">
          <em><strong>Medical Disclaimer:</strong> This guide is for educational awareness only and is in no way to be used for a clinical medical evaluation, diagnosis, or treatment. If pain persists or is interfering with your day-to-day living, please see a qualified orthopaedic physician.</em>
        </blockquote>
      `
    }
  ];

  const handleOpenPost = (post) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="bg-white text-slate-900 min-h-screen">
      <SEO
        title={
          selectedPost
            ? selectedPost.titleEn + " - Dr. M. Kalaivanan"
            : "Orthopedic Health Blogs & Articles - Dr. M. Kalaivanan"
        }
        description={
          selectedPost
            ? selectedPost.excerptEn
            : "Read expert orthopedic articles, joint replacement tips, and robotic surgery insights by Dr. M. Kalaivanan in Trichy."
        }
        path="/blogs"
      />

      {/* Page Header */}
      <section className="bg-slate-950 px-5 py-16 text-white sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="inline-block rounded-full bg-cyan-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300">
            {selectedPost
              ? t(selectedPost.categoryEn, selectedPost.categoryTa)
              : t("Clinical Knowledge Base", "மருத்துவக் வலைப்பதிவுகள்")}
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {selectedPost
              ? t(selectedPost.titleEn, selectedPost.titleTa)
              : t(
                  "Orthopedic Insights & Articles",
                  "எலும்பியல் வழிகாட்டிகள் மற்றும் வலைப்பதிவுகள்"
                )}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            {selectedPost
              ? selectedPost.date + " • Dr. M. Kalaivanan"
              : t(
                  "Stay informed with expert advice on joint preservation, robotic surgery breakthroughs, and post-operative care by Dr. M. Kalaivanan.",
                  "டாக்டர் எம். கலைவாணன் அவர்களின் மூட்டு பாதுகாப்பு மற்றும் ரோபோடிக் அறுவை சிகிச்சை பற்றிய மருத்துவக் வலைப்பதிவுகள்."
                )}
          </p>
        </div>
      </section>

      {/* Conditional Rendering: Full Article View OR Blog Cards Grid */}
      {selectedPost ? (
        <section className="mx-auto max-w-3xl px-5 py-12 sm:px-8 lg:py-16">
          <button
            onClick={() => setSelectedPost(null)}
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-cyan-700 hover:text-cyan-900 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>{t("Back to All Articles", "அனைத்து கட்டுரைகளுக்கும் திரும்பு")}</span>
          </button>

          <article
            className="text-slate-800"
            dangerouslySetInnerHTML={{ __html: selectedPost.contentEn }}
          />

          <div className="mt-12 pt-6 border-t border-slate-200">
            <button
              onClick={() => setSelectedPost(null)}
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-cyan-800 transition-colors"
            >
              <ArrowLeft size={14} />
              <span>{t("Back to All Articles", "அனைத்து கட்டுரைகளுக்கும் திரும்பு")}</span>
            </button>
          </div>
        </section>
      ) : (
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => handleOpenPost(post)}
                className="cursor-pointer group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-cyan-200"
              >
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.titleEn}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-cyan-700 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow">
                    {t(post.categoryEn, post.categoryTa)}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} className="text-cyan-700" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User size={13} className="text-cyan-700" />
                        Dr. M. Kalaivanan
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-cyan-800 transition-colors leading-snug">
                      {t(post.titleEn, post.titleTa)}
                    </h2>

                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {t(post.excerptEn, post.excerptTa)}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 group-hover:text-cyan-900">
                      <span>{t("Read Full Article", "முழு கட்டுரையைப் படிக்க")}</span>
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}