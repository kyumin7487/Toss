'use client';

import Link from 'next/link';

const footerSections = [
    {
        title: '서비스',
        items: [
            '공지사항',
            '자주 묻는 질문',
            '공동인증서 관리',
            '계정 일시잠금',
            '고객센터',
            '개인(신용)정보 이용·제공 내역 조회',
            '브랜드 리소스센터',
            '토스의 개인정보 보호',
            '토스유스카드',
        ],
    },
    {
        title: '회사',
        items: [
            '회사 소개',
            '토스페이먼츠',
            '토스인슈어런스',
            '토스증권',
            '토스씨엑스',
            '토스뱅크',
            '토스플레이스',
            '토스모바일',
            '토스인컴',
            '채용',
            '기술 블로그',
            '블로그',
        ],
    },
    {
        title: '문의',
        items: [
            '사업 제휴',
            '토스쇼핑 입점문의',
            '광고 문의',
            '인증 사업 문의',
            '마케팅·PR',
            'IR',
        ],
    },
    {
        title: '고객센터',
        items: [
            '전화: 1599-4905 (24시간 연중무휴)',
            '이메일(고객전용): support@toss.im',
            '이메일(외부기관전용): safe@toss.im',
            '민원 접수',
            '민원 접수(비즈니스 고객)',
        ],
    },
];

export default function Footer() {
    return (
        <footer className="bg-[#f9fafb] text-[#4e5968] text-sm border-t mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Sections */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-base font-semibold text-black mb-4">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.items.map((item) => (
                                    <li key={item}>
                                        {item.includes('@') || item.includes('전화') ? (
                                            <span>{item}</span>
                                        ) : (
                                            <Link href="#" className="hover:underline">
                                                {item}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="text-xs text-[#8b95a1] space-y-1 leading-relaxed">
                    <h3 className="text-[15px] text-[#000000]">(주)비바리퍼블리카</h3><br/>
                    <p>사업자 등록번호 : 120-88-01280 | 대표 : 이승건</p>
                    <p>호스팅 서비스 : ㈜비바리퍼블리카 | 통신판매업 신고번호 : 2014-서울강남-03377 <Link href="#" className="underline">사업자정보확인</Link></p>
                    <p>06236 서울특별시 강남구 테헤란로 142, 아크플레이스 4층, 10~13층, 22~23층</p>
                    <p>고객센터 : 서울특별시 강남구 테헤란로 133, 한국타이어빌딩 9층</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#8b95a1]">
                    {[
                        '서비스 이용약관',
                        '통합 금융정보 서비스 약관',
                        '마이데이터 서비스 이용약관',
                        '이용자의 권리 및 유의사항',
                        '개인정보 처리방침',
                        '채용팀 개인정보 처리방침',
                        '어드민 서비스 개인정보 처리방침',
                        '고정형 영상정보처리기기 운영 관리 방침',
                        '위치기반서비스 이용약관',
                        '가맹점 고지사항',
                        '토스 전자서명인증업무준칙',
                        '토스 전자인증서비스 약관',
                    ].map((text) => (
                        <Link href="#" key={text} className="hover:underline">
                            {text}
                        </Link>
                    ))}
                </div>

                <p className="mt-6 text-xs text-[#c2c9d0]">© {new Date().getFullYear()} Viva Republica. All rights reserved.</p>
            </div>
        </footer>
    );
}