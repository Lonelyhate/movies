import React, { FC } from 'react';
import './SpecContent.scss'
import { torrents } from '../../../../types/types';
import { GoFileDirectory } from 'react-icons/go';
import { HiOutlineArrowsExpand, HiVolumeUp } from 'react-icons/hi';
import { BsFillEyeFill } from 'react-icons/bs';
import { MdSubtitles, MdOndemandVideo } from 'react-icons/md';
import { BiTime } from 'react-icons/bi';

interface SpecContentProps {
    torrent: torrents;
    mpaRating: string | undefined;
}

const SpecContent: FC<SpecContentProps> = ({ torrent, mpaRating }) => {
    return (
        <div className="spec-content">
            <ul className="spec-content__list">
                <li className="spec-content__item">
                    <GoFileDirectory /> <span>{torrent.size}</span>
                </li>
                <li className="spec-content__item">
                    <HiOutlineArrowsExpand />{' '}
                    <span>
                        {torrent.quality === '720p'
                            ? '1280*534'
                            : torrent.quality === '1080p'
                            ? '1920*800'
                            : '3840*2160'}
                    </span>
                </li>
                <li className="spec-content__item">
                    <HiVolumeUp /> <span>English 5.1</span>
                </li>
                <li className="spec-content__item">
                    <BsFillEyeFill /> <span>{mpaRating}</span>
                </li>
                <li className="spec-content__item">
                    <MdSubtitles /> <span>Subtitles</span>
                </li>
                <li className="spec-content__item">
                    <MdOndemandVideo /> <span>23.976 fps</span>
                </li>
                <li className="spec-content__item">
                    <BiTime /> <span>2 hr 27 min</span>
                </li>
                <li className="spec-content__item">
                    <strong>P/S</strong>{' '}
                    <span>
                        {torrent.peers} / {torrent.seeds}
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default SpecContent;
