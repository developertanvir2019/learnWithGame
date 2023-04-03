const index = () => {
    const teams = [
        { id: 1, name: 'Dr. Aldi Agaj', title: 'CEO & FOUNDER | CHAIR OF BOARD OF DIRECTORS', img: '/images/team/Rectangle 2166.png' },
        { id: 2, name: 'Dr, Carlos Meixner', title: 'CTO & BOARD OF DIRECTORS', img: '/images/team/Rectangle 2167.png' },
        { id: 3, name: 'Maia Burgues', title: 'COO | BOARD OF DIRECTORS', img: '/images/team/Rectangle 2168.png' },
        { id: 4, name: 'Majlinda Agaj', title: 'BOARD OF DIRECTORS', img: '/images/team/Rectangle 2169.png' },
        { id: 5, name: 'Kristen Robertson', title: '2D ART LEAD | BOARD OF DIRECTORS', img: '/images/team/Rectangle 2166 (1).png' },
        { id: 6, name: 'Chinamay Kasareddy', title: 'GAME DEVELOPER | BOARD OF DIRECTORS', img: '/images/team/Rectangle 2167 (1).png' },
        { id: 7, name: 'Leila Sedaei', title: 'SCIENTIFIC ADVISOR', img: '/images/team/Rectangle 2168 (1).png' },
        { id: 8, name: 'Leila Sedaei', title: 'SCIENTIFIC ADVISOR', img: '/images/team/Rectangle 2169 (1).png' },
        { id: 9, name: 'Tommaso De Lorenzo', title: 'PHYSICIST SCIENCE AND EDUCATION', img: '/images/team/Rectangle 2166 (2).png' },
        { id: 10, name: 'Sergei Vasilev', title: 'AR/VR PROGRAMMER', img: '/images/team/Rectangle 2167 (2).png' },
        { id: 11, name: 'Bhavesh Patel', title: 'XR DEVELOPER', img: '/images/team/Rectangle 2168 (2).png' },
        { id: 12, name: 'Tulio Simeoni', title: 'MUSIC & SOUNDS PRODUCER', img: '/images/team/Rectangle 2169(2).png' },
    ]
    return (
        <div className="mb-20">
            <p className="text-5xl text-center font-semibold mt-20 mb-10">Our Team</p>
            <div className="lg:grid grid-cols-4 gap-8 lg:mx-20">
                {
                    teams.map(member =>
                        <div className="relative my-4">
                            <img src={member.img} alt="Image description" className="w-96" />
                            <p className="pb-2 absolute bottom-4 left-4 right-0 p-4 bg-gray bg-opacity-100 text-white"><span className="font-semibold text-xl text-primary">{member.name} <br /></span> {member.title}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default index;