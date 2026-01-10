const Card = ({
    icon,
    title,
    school,
    description,
    date,
    location,
    status,
}) => {
    return (
        <div className="card card-border bg-base-100 w-full lg:w-104">
            <div className="card-body">
                <a className="space-y-4 block">
                    <div className="flex items-start gap-x-4">
                        <div className="bg-white w-14 h-14 border rounded-full flex items-center justify-center shrink-0">
                            {icon}
                        </div>
                        <div className="flex-1 min-w-0">
                            <span className="block text-sm text-info-content font-medium">
                                {title}
                            </span>
                            <h3 className="text-base-content font-semibold mt-1 break-words">
                                {school}
                            </h3>
                        </div>
                    </div>

                    <p className="text-base-content text-sm leading-relaxed">
                        {description}
                    </p>
                    <div className="text-sm text-base-content flex flex-wrap items-center gap-x-6 gap-y-2">
                        <span className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="16" height="16"><path xmlns="http://www.w3.org/2000/svg" d="M18 22h-4v4h4zm8 0h-4v4h4zm8 0h-4v4h4zm4-14h-2V4h-4v4H16V4h-4v4h-2c-2.22 0-3.98 1.8-3.98 4L6 40a4 4 0 0 0 4 4h28c2.2 0 4-1.8 4-4V12c0-2.2-1.8-4-4-4m0 32H10V18h28z"></path></svg>
                            {date}
                        </span>
                        <span className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="16" height="16"><g xmlns="http://www.w3.org/2000/svg" transform="scale(.09375)"><circle cx="256" cy="192" r="32"></circle><path d="M256 32c-88.22 0-160 68.65-160 153 0 40.17 18.31 93.59 54.42 158.78 29 52.34 62.55 99.67 80 123.22a31.75 31.75 0 0 0 51.22 0c17.42-23.55 51-70.88 80-123.22C397.69 278.61 416 225.19 416 185c0-84.35-71.78-153-160-153m0 224a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64"></path></g></svg>
                            {location}
                        </span>
                        <span className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="16" height="16"><path xmlns="http://www.w3.org/2000/svg" d="M24 0A24 24 0 0 0 0 24a24 24 0 0 0 24 23.999 24 24 0 0 0 23.999-24A24 24 0 0 0 23.999 0m12.429 8.571 4.714 4.653-22.393 27.918L3.43 24.856l4.714-4.652L18.75 30.673z"></path></svg>
                            {status}
                        </span>
                    </div>
                </a>
            </div>
        </div>

    );
};

export default Card;