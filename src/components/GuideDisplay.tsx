import GuideCard from "./GuideCard"

type GuideInfo = {
    project: any 
    }

const GuideDisplay = (props: GuideInfo) => {
    let data = props.project

    return(
        <GuideCard
        name={data.title}
        file={data.file}
        status={data.badge.status}
        statusColor={data.badge.color}
        statusVariant={data.badge.variant}
        desc={data.description}
        imgSrc={data.image}
        time={data.time}
        />
    )
}

export default GuideDisplay;

