export type Props = {
    size: number
}
const ProfilePic = (props: Props) => {
    const { size } = props;

    return (
    <div style={{height: `${size}rem`, width: `${size}rem`, overflow: 'hidden', borderRadius: '50%'}}>
        <img style={{width: `${size}rem`}} src="images/profile.jpg" />
    </div>
    )
}

export default ProfilePic