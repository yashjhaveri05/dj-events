from rest_framework import serializers
from django.contrib.auth.models import User
from .models import (
    Events,
    CoreCommittee,
    CoCommitteeReferals,
    CoCommitteeTasks,
    CoCommittee,
    Faculty,
    Committee,
    Students,
    EventLikes,
)


class EventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = [
            "id",
            "eventDescription",
            "eventSummary",
            "eventName",
            "eventDate",
            "eventTime",
            "eventSeatingCapacity",
            "eventVenue",
            "registrationLink",
            "is_referral",
            "organisingCommittee",
            "contactName1",
            "contactName2",
            "contactNumber1",
            "contactNumber2",
            "likes",
        ]


class CoreCommitteeSerializer(serializers.ModelSerializer):
    committee = serializers.StringRelatedField()
    student = serializers.CharField(source='student.get_full_name')

    class Meta:
        model = CoreCommittee
        fields = [
            "id",
            "student",
            "committee",
            "positionAssigned",
        ]


class CoCommitteeReferalsSerializer(serializers.ModelSerializer):
    event = serializers.StringRelatedField()

    class Meta:
        model = CoCommitteeReferals
        fields = [
            "id",
            "participant",
            "coCommittee",
            "event",
        ]


class CoCommitteeTasksSerializer(serializers.ModelSerializer):
    class Meta:
        model = CoCommitteeTasks
        fields = [
            "id",
            "coCommittee",
            "task",
            "assigned_by",
        ]
        depth = 2


class CoCommitteeSerializer(serializers.ModelSerializer):
    referrals = CoCommitteeReferalsSerializer(many=True)
    tasks = CoCommitteeTasksSerializer(many=True)
    committee = serializers.StringRelatedField()
    student = serializers.CharField(source='student.get_full_name')

    class Meta:
        model = CoCommittee
        fields = [
            "id",
            "student",
            "committee",
            "positionAssigned",
            "referrals",
            "tasks",
        ]


class FacultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = [
            "id",
            "name",
            "positionAssigned",
            "committee",
            "department",
        ]


class CommitteeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Committee
        fields = [
            "id",
            "committeeName",
            "committeeDescription",
            "committeeDept",
            "committeeChairperson",
        ]


class CommitteeDetailSerializer(serializers.ModelSerializer):
    events = EventsSerializer(many=True)
    coreCommitteeMembers = CoreCommitteeSerializer(many=True)
    facultyMembers = FacultySerializer(many=True)

    class Meta:
        model = Committee
        fields = [
            "id",
            "committeeName",
            "committeeDescription",
            "committeeDept",
            "committeeChairperson",
            "events",
            "coreCommitteeMembers",
            "facultyMembers",
        ]
        depth = 2


class StudentsSerializer(serializers.ModelSerializer):
    coCommittees = CoCommitteeSerializer(many=True)
    coreCommittees = CoreCommitteeSerializer(many=True)

    class Meta:
        model = Students
        fields = [
            "id",
            "username",
            "first_name",
            "last_name",
            "sap",
            "department",
            "coCommittees",
            "coreCommittees",
        ]


class EventLikeSerializer(serializers.ModelSerializer):
    event = EventsSerializer(many=True)
    student = StudentsSerializer(many=True)

    class Meta:
        model = EventLikes
        fields = ["id", "event", "student"]


class ChangePasswordSerializer(serializers.Serializer):
    model = User

    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)
