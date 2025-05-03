import Image from "next/image";
import { LanguageSwitcher } from "@/components/language-switcher";
import { MainNavigation } from "@/components/main-navigation";
import Phone1 from "@/ui/phone1";
import Phone2 from "@/ui/phone2";
import Transfer1 from "@/ui/transfer1";
import Footer from "@/ui/footer/footer";

export default function Home() {
    return (
        <main className="relative min-h-screen overflow-hidden">
            <header className="absolute top-0 left-0 w-full px-4 py-5 flex justify-between items-center z-20">
                <div className="flex items-center">
                    <Image src="/images/toss-logo.png" alt="Toss" width={90} height={30} className="mr-8"/>
                    <MainNavigation/>
                </div>
                <LanguageSwitcher/>
            </header>

            <section className="relative pt-24 h-screen w-full overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src="/home/new_main.png" alt="Background" fill style={{objectFit: "cover"}} priority/>
                </div>

                <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-5xl md:text-7xl text-black mb-6 font-bold">금융의 모든 것</h1>
                    <h2 className="text-3xl md:text-5xl text-black font-semibold">토스에서 쉽고 간편하게</h2>
                </div>
            </section>
            <section className="relative pt-24 min-h-[1400px] h-auto w-full overflow-visible">
                <div className="pr-8 translate-x-[330px]">
                    <h3 className="text-[29px] font-bold mb-4 text-[#3182f6]">홈 · 소비</h3>
                    <h1 className="text-[50px] md:text-5xl font-bold text-gray-900 leading-snug">
                        내 돈 관리,<br/>
                        지출부터 일정까지<br/>
                        똑똑하게
                    </h1>
                </div>
                <div className="translate-x-[1040px] translate-y-[-260px]">
                    <Phone1/>
                </div>
                <div className="translate-x-[220px] translate-y-[10px]">
                    <Phone2/>
                </div>
                <div className="translate-x-[1050px] translate-y-[770px]">
                    <span className="font-semibold text-[23px]">
                        토스에 계좌와 카드를 연결해 보세요.<br/>
                        계좌 잔액, 대출·투자 내역은 기본,<br/>
                        일자별 소비와 수입까지 한 번에 볼 수 있어요.
                    </span>
                </div>
            </section>
            <section className="relative min-h-[2100px] h-auto w-full overflow-visible bg-[#F8F9FA]">
                <div className="pr-8 translate-x-[380px] translate-y-[200px]">
                    <h3 className="text-[29px] font-bold mb-4 text-[#3182f6]">송금</h3>
                    <h1 className="text-[50px] md:text-5xl font-bold text-gray-900 leading-snug">
                        간편하고 안전하게<br/>
                        수수료는 평생 무료로,<br/>
                        이런 송금 써보셨나요?
                    </h1>
                </div>
                <div className="pr-8 translate-x-[420px] translate-y-[300px]">
                    <Transfer1
                        category="평생 무료 송금"
                        comment="누구에게 보내든 은행 상관 없이,<br/>이제 토스와 함께 수수료 걱정 없이 송금하세요."
                        icon="/home/home_transfer_1.svg"
                        image="/home/section1_2_01_re.png"
                        imageAlign="right"
                        title="토스 평생 무료송금으로<br/>모두의 금융에 자유를"
                    />
                </div>
                <div className="pr-8 translate-x-[420px] translate-y-[400px]">
                    <Transfer1
                        category="사기계좌 조회"
                        comment="송금 전 토스가 알아서 사기 내역 조회를 해드려요.<br/>상대방의 연락처 또는 계좌가 사기 계좌인지 조회해<br/>안전하게 송금할 수 있어요."
                        icon="/home/home_transfer_2.svg"
                        image="/home/section1_2_02.png"
                        imageAlign="left"
                        title="송금 전 사기 내역 조회로<br/>피해를 미리 방지할 수 있어요"
                    />
                </div>
                <div className="pr-8 translate-x-[420px] translate-y-[500px]">
                    <Transfer1
                        category="자동이체 예약"
                        comment="은행 점검 시간에는 자동이체 예약을 이용해보세요.<br/>점검 시간이 끝나면 토스가 알아서 송금해드릴게요."
                        icon="/home/home_transfer_3.svg"
                        image="/home/section1_2_01_re.png"
                        imageAlign="right"
                        title="은행 점검 시간,<br/>기다릴 필요 없어요"
                    />
                </div>
            </section>
            <Footer/>
        </main>
    );
}