export const config = {
    title: 'FundPoint',
    description:
        'Smart contract mediated proof of fund requests on Lisk with one click',
    isLocal: process.env.NEXT_PUBLIC_ENV === 'development',
    about: [
        {
            title: 'What is FundPoint?',
            description:
                'FundPoint allows you to verify your balance without exposing unnecessary information to the requester.',
        },
        {
            title: 'How does it work?',
            description:
                'FundPoint lets you create balance verification links. For each request, the recipient can verify the request by proving ownership over a satisfying wallet.',
        },
        {
            title: 'Disclaimer',
            description:
                'Note FundPoint is currently a proof of concept prototype and as provided as-is without any guarantees. Use at your own discretion.',
        },
    ],
    steps: [
        {
            title: 'Create',
            description:
                'Create a balance verification request. A shareable link is generated that you can send to the other party.',
        },
        {
            title: 'Share',
            description:
                'Recipient accesses the verification link and connects with a known address. The recipient proves ownership and verifies that the funds belong to them.',
        },
        {
            title: 'Verify',
            description:
                'Requester can review the completed verification event on the underlying smart contract.',
        },
    ],
}
