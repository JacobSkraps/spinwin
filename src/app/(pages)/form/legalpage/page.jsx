"use client";

import Link from 'next/link'

export default function legalPage() {
    return (
        <div className="">
            <h3 className="formSubHeading">Spin to Win Contest</h3>
            <p className="paragraphText">1. Eligibility
            Open to legal residents 16+.
            Under 16 requires guardian consent.
            Employees of BuyMore Dollars Inc. are not eligible to play.</p>
            <p className="paragraphText">2. Contest Rules
            Play once every 72 hours if you win and every 36 if you lose.
            Fill out the entry form and agree to the rules.
            Winners are randomly selected each week.</p>
            <p className="paragraphText">3. Prizes
            1x 10,000 BuyMore Dollars
            5x 750 BuyMore Dollars
            10x 100 BuyMore Dollars
            100x 20 BuyMore Dollars</p>
            <p className="paragraphText">4. Claiming Prizes
            Winners will be notified via email.
            You must successfully answer a skill-testing question.
            Prizes must be claimed within 5 days.</p>
            <p className="paragraphText">5. General Terms
            No cash alternative for prizes.
            BuyMore Dollars Inc. may cancel or modify the contest.
            Entries suspected of fraud will be disqualified.</p>
            <p className="paragraphText">6. Privacy & Consent
            Entry info used for contest & marketing.
            For information about data please refer to our <Link href="./#">privacy policy</Link> for more details</p>
        </div>
    );
}

